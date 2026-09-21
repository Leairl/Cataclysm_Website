import React, { useEffect, useState } from 'react';
import { Callout, Heading } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import './retail-talent-viewer.css';
import { Dragonblight } from "../../clients/Dragonblight";
import { ClassColor } from '../../helpers/classColorHelper';
import { wowheadUrl } from "../../helpers/game-flavor";
declare const $WowheadPower: { refreshLinks: () => void };

// Retail talent panes, laid out the way Wowhead lays them out.
//
// Blizzard publishes each tree as a list of nodes, and every node carries the grid square it
// sits on (display_row / display_col) plus the node ids it unlocks. That is enough to place the
// icons and draw the lines between them, so nothing here is hardcoded per class - a new class or
// a reworked tree needs no change. The character's own picks come from the active loadout, which
// names a node id and how many points went into it.
//
// MoP Classic has a fixed 6x3 grid per class and is handled by talent-viewer.tsx instead.

// Sized so the three trees sit on one row inside .talent-row (60vw): the widest class spans
// 17 columns across the three, which comes to about 860px including the gaps between panels.
const CELL = 42; // px between the top-left corners of neighbouring nodes
const ICON = 32; // px icon size, matching .retailTalentIcon in the css

interface RetailTalentViewerProps {
  charName: string
  server: string
  region: string
  charClass: string
}

const RetailTalentViewer: React.FC<RetailTalentViewerProps> = (props) => {
  const [talents, setTalents] = useState<Dragonblight.CharacterSpecializationsSummary>();
  const [tree, setTree] = useState<Dragonblight.TalentTree>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    Load();
  }, []);

  // Wowhead's script turns the links into icons and attaches the tooltips, and only looks at
  // the document when told to, so it has to run after each render that adds nodes.
  useEffect(() => {
    if (!loading) {
      $WowheadPower.refreshLinks();
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="grid min-h-[250px] w-full place-items-center p-6">
        <svg className="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="5" />
          <path d="M32 3C44.5 3 55.5 11 59.5 23" stroke="currentColor" strokeWidth="5"
            strokeLinecap="round" style={{ color: ClassColor.get(props.charClass ?? "black") }} />
        </svg>
      </div>
    );
  }

  const loadout = ActiveLoadout();
  if (tree == undefined || loadout == undefined) {
    return (
      <Callout.Root color="red" className="m-3">
        <Callout.Icon><InfoCircledIcon /></Callout.Icon>
        <Callout.Text>
          No talents reported for this character. Blizzard only returns a loadout once the
          character has logged in since its talents were last changed.
        </Callout.Text>
      </Callout.Root>
    );
  }

  // The hero tree the character has chosen, out of the several their spec can pick from.
  const heroTree = tree.hero_talent_trees?.find(h => h.id === talents?.active_hero_talent_tree?.id);

  // The class and spec lists also carry hero tree nodes - every hero tree, not just the chosen
  // one, and all of them on the same few columns. Left in, the spec tree draws several hero trees
  // stacked on each other and the class tree gains a stray node far off to one side. The chosen
  // hero tree gets its own panel below, from its own node list.
  const heroNodeIds = new Set(
    (tree.hero_talent_trees ?? []).flatMap(h => h.hero_talent_nodes?.map(n => n.id) ?? []));
  const notHero = (n: Dragonblight.TalentNode) => !heroNodeIds.has(n.id);
  const classNodes = tree.class_talent_nodes?.filter(notHero);
  const specNodes = tree.spec_talent_nodes?.filter(notHero);

  // class, then hero, then spec - the order the in-game talent screen puts them in
  return (
    <div className="retailTalentTrees">
      {Panel(tree.playable_class?.name ?? "Class", classNodes, loadout.selected_class_talents)}
      {Panel(heroTree?.name ?? "Hero", heroTree?.hero_talent_nodes, loadout.selected_hero_talents)}
      {Panel(tree.playable_specialization?.name ?? "Specialization", specNodes, loadout.selected_spec_talents)}
    </div>
  );

  // One tree: its nodes placed on the grid Blizzard gives them, with the lines between them.
  function Panel(title: string, all?: Dragonblight.TalentNode[], picks?: Dragonblight.LoadoutTalent[]) {
    // A handful of nodes are published with no talent on them at all, out at the edge of a tree.
    // They have nothing to draw, and counted in they would pad the panel with empty columns.
    const nodes = all?.filter(n => SpellId(n) != undefined);
    if (nodes == undefined || nodes.length === 0) { return null; }

    // Rows and columns are absolute across the whole talent screen - the spec tree starts at
    // column 15, not column 1 - so each panel is shifted back to its own top-left corner.
    // Gaps inside a tree are left alone, because they are part of its shape.
    const minRow = Math.min(...nodes.map(n => n.display_row));
    const minCol = Math.min(...nodes.map(n => n.display_col));
    const width = (Math.max(...nodes.map(n => n.display_col)) - minCol) * CELL + ICON;
    const height = (Math.max(...nodes.map(n => n.display_row)) - minRow) * CELL + ICON;

    const x = (n: Dragonblight.TalentNode) => (n.display_col - minCol) * CELL;
    const y = (n: Dragonblight.TalentNode) => (n.display_row - minRow) * CELL;
    const pickOf = (n: Dragonblight.TalentNode) => picks?.find(p => p.id === n.id);

    return (
      <div className="retailTalentPanel">
        <Heading size="3" className="mb-2">{title}</Heading>
        <div className="retailTalentGrid" style={{ width, height }}>
          <svg className="retailTalentLines" width={width} height={height}>
            {nodes.flatMap(from => (from.unlocks ?? []).map(id => {
              const to = nodes.find(n => n.id === id);
              // a tree's outermost nodes unlock gates in the next tree, which this panel has no
              // position for, so those edges are simply not drawn
              if (to == undefined) { return null; }
              const taken = pickOf(from) != undefined && pickOf(to) != undefined;
              return (
                <line key={`${from.id}-${id}`}
                  x1={x(from) + ICON / 2} y1={y(from) + ICON / 2}
                  x2={x(to) + ICON / 2} y2={y(to) + ICON / 2}
                  className={taken ? "retailTalentLine taken" : "retailTalentLine"} />
              );
            }))}
          </svg>
          {nodes.map(node => Node(node, pickOf(node), x(node), y(node)))}
        </div>
      </div>
    );
  }

  // One node: a Wowhead link that their script turns into an icon with a tooltip on hover,
  // greyed out when the character did not take it, with its points in the corner.
  function Node(node: Dragonblight.TalentNode, pick: Dragonblight.LoadoutTalent | undefined, left: number, top: number) {
    const spellId = SpellId(node, pick);
    const maxRank = node.ranks?.length ?? 1;

    return (
      <div key={node.id} className="retailTalentNode" data-taken={pick != undefined ? "true" : "false"}
        style={{ left, top }}>
        {spellId != undefined && (
          <a className="retailTalentIcon" href={wowheadUrl(`spell=${spellId}`)} data-wh-rename-link="false"></a>
        )}
        {maxRank > 1 && (
          <span className="retailTalentRank">{(pick?.rank ?? 0)}/{maxRank}</span>
        )}
      </div>
    );
  }

  // The spell a node shows. A choice node offers two talents and the loadout names the one that
  // was taken; an untaken choice node has no answer, so it shows the first as a placeholder.
  function SpellId(node: Dragonblight.TalentNode, pick?: Dragonblight.LoadoutTalent) {
    const rank = node.ranks?.[0];
    if (rank == undefined) { return undefined; }
    if (rank.choice_of_tooltips != undefined && rank.choice_of_tooltips.length > 0) {
      const chosen = rank.choice_of_tooltips.find(t => t.talent?.id === pick?.tooltip?.talent?.id);
      return (chosen ?? rank.choice_of_tooltips[0])?.spell_tooltip?.spell?.id;
    }
    return rank.tooltip?.spell_tooltip?.spell?.id;
  }

  // The loadout the character is currently playing, out of one per specialization.
  function ActiveLoadout() {
    const specId = talents?.active_specialization?.id;
    const spec = talents?.specializations?.find(s => s.specialization?.id === specId);
    return spec?.loadouts?.find(l => l.is_active) ?? spec?.loadouts?.[0];
  }

  async function Load() {
    setLoading(true);
    const talentClient = new Dragonblight.TalentClient();
    const summary = await talentClient.getCharacterTalents(props.server, props.charName, props.region);
    setTalents(summary);
    const specId = summary?.active_specialization?.id;
    if (specId != undefined) {
      setTree(await talentClient.getTalentTree(specId, props.region));
    }
    setLoading(false);
  }
};

export default RetailTalentViewer;

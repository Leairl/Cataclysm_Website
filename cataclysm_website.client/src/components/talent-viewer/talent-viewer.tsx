import React, { useEffect, useState } from 'react';
import Talents, { Talent } from '../../data/talent';
import TalentTabs from '../../data/talentTab';
import { Card, Heading } from "@radix-ui/themes";
import './talent-viewer.css';
import { Dragonblight } from "../../clients/Dragonblight";
declare const $WowheadPower: { refreshLinks: () => void };

interface TalentViewerProps {
    // Define your props here
}
const ranks: string[] = ['SpellRank_0', 'SpellRank_1', 'SpellRank_2', 'SpellRank_3', 'SpellRank_4', 'SpellRank_5', 'SpellRank_6', 'SpellRank_7', 'SpellRank_8'];
const TalentViewer: React.FC<TalentViewerProps> = (/*props*/) => {
    const [playerTalents, setPlayerTalents] = useState<Dragonblight.CharacterSpecializationsSummary>();
    useEffect(() => {
        $WowheadPower.refreshLinks();
        LoadTalents();
      }, []);
      useEffect(() => {
        $WowheadPower.refreshLinks();
      }, [playerTalents]);
    return (
        <div style={{ display: 'flex' }}>
            {TalentTabs.filter((tab) => tab.BackgroundFile.startsWith('Rogue') && tab.OrderIndex >= 0).map((tab) => {
                return (
                    <div key={tab.ID} style={{ flex: '1' }}>
                        <Card className="mr-4">
                            <Heading size="3">{tab.Name_lang + " - " + GetPointsSpent(tab.Name_lang)}</Heading>
                            <div className="flex">
                                {[0,1,2,3].map(c => 
                                    { return (<div key={tab.ID + 'x' + c} className=" flex-1 flex flex-col">
                                        {[0,1,2,3,4,5,6].map(r => {
                                            const talent = Talents.find((talent) => talent.TabID === tab.ID && talent.ColumnIndex == c && talent.TierID == r);
                                            return (
                                                <div key={talent?.ID + '' + c + r} className="m-2 w-[34px] h-[34px] talentIconWrapper" data-talented={GetPointsForTalent(tab.Name_lang, talent) != 0}>
                                                    {talent != null && (
                                                    <div>
                                                        <a className="block w-[34px] h-[34px] talentIcon"
                                                        href={`https://www.wowhead.com/cata/spell=${GetTalentedSpell(tab.Name_lang, talent)}`}
                                                        data-points="0" data-max-points="3">
                                                        </a>
                                                        <span className="tree-talent-points pointer-events-none" data-talented={GetPointsForTalent(tab.Name_lang, talent) != 0}>
                                                            {GetPointsForTalent(tab.Name_lang, talent)}/{getNumPoints(talent)}
                                                        </span>
                                                    </div>
                                                    )}
                                                </div>
                                            );
                                        })}</div>);
                                    })
                                }
                            </div>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
    
    async function LoadTalents() 
    {
        const client = new Dragonblight.TalentClient();
        setPlayerTalents(await client.getCharacterTalents('Benediction','Jaxington', 'us'));
    }
    
    function GetPointsSpent(name: string) {
        const activeSpec = playerTalents?.specialization_groups?.find(s => s.is_active);
        if (activeSpec?.specializations != undefined)
        {
            const tree = activeSpec?.specializations.find(s => s.specialization_name == name);
            return tree?.spent_points ?? 0;
        }
        return 0;
    }

    function GetTalentedSpell(tree_name: string, talent: Talent)
    {
        const activeSpec = playerTalents?.specialization_groups?.find(s => s.is_active);
        if (activeSpec?.specializations != undefined)
        {
            const tree = activeSpec?.specializations.find(s => s.specialization_name == tree_name);
            let spellId = talent.SpellRank_0;
            ranks.forEach(rank => {
                const r = tree?.talents?.find(t => (t.spell_tooltip?.spell?.id ?? 0) == talent[rank]);
                if (r != undefined && r.spell_tooltip?.spell?.id) { spellId = r.spell_tooltip?.spell?.id; }
            });
            return spellId;
        }
    }

    function GetPointsForTalent(tree_name: string, talent: Talent | undefined)
    {
        if (talent == undefined) { return 0; }
        const activeSpec = playerTalents?.specialization_groups?.find(s => s.is_active);
        if (activeSpec?.specializations != undefined)
        {
            const tree = activeSpec?.specializations.find(s => s.specialization_name == tree_name);
            let points = 0;
            for (const rank of ranks) {
                const r = tree?.talents?.find(t => (t.spell_tooltip?.spell?.id ?? 0) == talent[rank]);
                const currSpell = talent[rank];
                if (currSpell != 0) { points++; }
                else { points = 0; }
                if (r != undefined && r.spell_tooltip?.spell?.id) { break; }
            }
            return points;
        }
    }
};
function getNumPoints(talent: Talent) {
    let result = 0;
    ranks.forEach(rank => {
        const r = talent[rank];
        if (r != 0) {
            result++;
         }
    });
    return result;
}    
export default TalentViewer;


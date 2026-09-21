// Wowhead's item tooltips list a tier set's bonuses for every specialization the class has, and
// their tooltip service ignores a spec parameter - spec, specId and spec_id all come back with the
// full list - so the lines for the other specs are taken out after the tooltip is inserted.
//
// Each line is wrapped in comment markers naming the spec it belongs to, which is how Wowhead's
// own pages filter them:
//
//   <!--itemeffectspec577:0--><span>(2) Set Havoc: ...</span><!--itemeffectspec-->
//
// Should Wowhead ever stop emitting the markers, nothing matches and the tooltip is simply left
// as it is today.

const OPENING_MARKER = /^itemeffectspec(\d+):/;
const CLOSING_MARKER = "itemeffectspec";

// Removes every set bonus line that belongs to another specialization.
function pruneOtherSpecs(root: Element, specId: number): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
  const markers: Comment[] = [];
  while (walker.nextNode()) {
    const comment = walker.currentNode as Comment;
    if (OPENING_MARKER.test(comment.data)) {
      markers.push(comment);
    }
  }

  for (const marker of markers) {
    if (Number(OPENING_MARKER.exec(marker.data)?.[1]) === specId) {
      continue;
    }
    // one bonus line runs from its opening marker to the next closing marker, and the <br> after
    // it is the blank line it would otherwise leave behind
    const line: ChildNode[] = [];
    for (let node: ChildNode | null = marker; node != null; node = node.nextSibling) {
      line.push(node);
      const closed = node !== marker
        && node.nodeType === Node.COMMENT_NODE
        && (node as Comment).data === CLOSING_MARKER;
      if (closed) { break; }
    }
    const trailing = line[line.length - 1]?.nextSibling;
    if (trailing?.nodeName === "BR") {
      line.push(trailing);
    }
    line.forEach((node) => node.remove());
  }
}

// Prunes each tooltip as Wowhead inserts it. The specialization is read at that moment rather than
// captured, because the tooltip can appear before the character's profile has loaded.
// Returns a teardown function, for useEffect to call.
export function installTierSetSpecFilter(activeSpecId: () => number | undefined): () => void {
  const observer = new MutationObserver((records) => {
    const specId = activeSpecId();
    if (specId == undefined) { return; }
    for (const record of records) {
      record.addedNodes.forEach((node) => {
        // the markers are inside the inserted node, or beside it when Wowhead fills a tooltip in
        // pieces, so the search starts at whichever element contains them
        const root = node.nodeType === Node.ELEMENT_NODE
          ? (node as Element)
          : node.parentElement;
        if (root != null) {
          pruneOtherSpecs(root, specId);
        }
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  return () => observer.disconnect();
}

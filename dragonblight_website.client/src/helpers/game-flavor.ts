// Which version of WoW the site is showing.
// Lives in the URL (?flavor=retail) so links stay shareable and a refresh keeps
// the choice, and is sent to the API as a header so no endpoint signature has to
// change. Classic is the default, so existing links keep working untouched.

export type GameFlavor = "classic" | "retail";

const PARAM = "flavor";
const STORAGE_KEY = "gameFlavor";
const HEADER = "X-Game-Flavor";

function isFlavor(value: string | null): value is GameFlavor {
  return value === "classic" || value === "retail";
}

export function getFlavor(): GameFlavor {
  const fromUrl = new URLSearchParams(window.location.search).get(PARAM);
  if (isFlavor(fromUrl)) return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isFlavor(stored)) return stored;
  } catch {
    // private browsing / blocked storage - fall through to the default
  }
  return "classic";
}

export function setFlavor(flavor: GameFlavor): void {
  if (flavor === getFlavor()) return;
  try {
    localStorage.setItem(STORAGE_KEY, flavor);
  } catch {
    // not fatal - the URL still carries the choice
  }
  const url = new URL(window.location.href);
  if (flavor === "classic") url.searchParams.delete(PARAM);
  else url.searchParams.set(PARAM, flavor);
  // Full reload: every page fetches in its own effect, so reloading is what
  // guarantees they all refetch under the new flavor.
  window.location.assign(url.toString());
}

// Adds the flavor header to our own API calls. Called once at startup.
export function installFlavorHeader(): void {
  const original = window.fetch.bind(window);
  window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
    const url =
      typeof input === "string" ? input
      : input instanceof URL ? input.toString()
      : input.url;

    if (!url.includes("/api/")) return original(input, init);

    if (typeof input === "string" || input instanceof URL) {
      const headers = new Headers(init?.headers);
      headers.set(HEADER, getFlavor());
      return original(input, { ...init, headers });
    }

    const request = new Request(input, init);
    request.headers.set(HEADER, getFlavor());
    return original(request);
  };
}

// Wowhead serves each game version under its own path: MoP Classic lives at
// /mop-classic/, retail sits at the root. The tooltip script reads the matching
// `domain` from whTooltips, which index.html sets before tooltips.js loads.
export function wowheadPath(flavor: GameFlavor = getFlavor()): string {
  return flavor === "classic" ? "mop-classic/" : "";
}

// Builds a Wowhead link for the current flavor, e.g. wowheadUrl(`item=${id}`).
export function wowheadUrl(path: string, flavor: GameFlavor = getFlavor()): string {
  return `https://www.wowhead.com/${wowheadPath(flavor)}${path}`;
}

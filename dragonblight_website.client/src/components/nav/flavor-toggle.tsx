import { getFlavor, setFlavor } from "../../helpers/game-flavor";

// Switches the site between Retail and MoP Classic.
function FlavorToggle() {
  const current = getFlavor();

  return (
    <div className="flex items-center" role="group" aria-label="Game version">
      {(["classic", "retail"] as const).map((flavor) => {
        const active = current === flavor;
        return (
          <button
            key={flavor}
            type="button"
            onClick={() => setFlavor(flavor)}
            aria-pressed={active}
            className={
              "px-3 py-1 text-xs font-segoeFont border border-gray-500 " +
              (flavor === "classic" ? "rounded-l" : "rounded-r border-l-0 ") +
              (active
                ? "bg-gray-200 text-black font-semibold"
                : "bg-transparent text-gray-300 hover:text-white")
            }
          >
            {flavor === "classic" ? "MoP" : "Retail"}
          </button>
        );
      })}
    </div>
  );
}

export default FlavorToggle;

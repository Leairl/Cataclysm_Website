/// <summary>
/// Which version of World of Warcraft a request targets.
/// The Blizzard API exposes both through the same endpoints, distinguished
/// only by a segment in the namespace query parameter.
/// </summary>
public enum GameFlavor
{
    Retail,
    MistsClassic
}

public static class GameFlavorExtensions
{
    /// <summary>
    /// The segment this flavor contributes to a Blizzard API namespace, e.g.
    /// "profile-" + segment + "us" gives "profile-us" or "profile-classic-us".
    /// </summary>
    public static string NamespaceSegment(this GameFlavor flavor) => flavor switch
    {
        GameFlavor.Retail       => "",
        GameFlavor.MistsClassic => "classic-",
        _ => throw new ArgumentOutOfRangeException(nameof(flavor))
    };

    /// <summary>
    /// Prefix this flavor contributes to Redis keys that are not derived from a
    /// Blizzard namespace. Every flavor contributes a distinct prefix so two
    /// flavors can never share a key.
    /// </summary>
    public static string KeyPrefix(this GameFlavor flavor) => flavor switch
    {
        GameFlavor.Retail       => "retail_",
        GameFlavor.MistsClassic => "classic_",
        _ => throw new ArgumentOutOfRangeException(nameof(flavor))
    };

    /// <summary>
    /// PvP brackets this flavor has ladders for, in display order. Retail removed 5v5.
    /// The client mirrors this list (brackets() in helpers/game-flavor.ts) and labels
    /// rating cards by position, so the two lists must stay in the same order.
    /// </summary>
    public static IReadOnlyList<string> Brackets(this GameFlavor flavor) => flavor switch
    {
        GameFlavor.Retail       => ["2v2", "3v3", "rbg"],
        GameFlavor.MistsClassic => ["2v2", "3v3", "5v5", "rbg"],
        _ => throw new ArgumentOutOfRangeException(nameof(flavor))
    };
}

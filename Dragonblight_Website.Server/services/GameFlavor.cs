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
}

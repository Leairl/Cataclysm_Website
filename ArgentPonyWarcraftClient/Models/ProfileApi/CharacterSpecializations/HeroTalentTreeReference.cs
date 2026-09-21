namespace ArgentPonyWarcraftClient;

/// <summary>
/// A reference to a hero talent tree.
/// </summary>
public record HeroTalentTreeReference
{
    /// <summary>
    /// Gets the key for the hero talent tree.
    /// </summary>
    [JsonPropertyName("key")]
    public Self Key { get; init; }

    /// <summary>
    /// Gets the name of the hero talent tree.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; init; }

    /// <summary>
    /// Gets the ID of the hero talent tree.
    /// </summary>
    [JsonPropertyName("id")]
    public long Id { get; init; }
}

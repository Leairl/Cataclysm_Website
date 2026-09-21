namespace ArgentPonyWarcraftClient;

/// <summary>
/// A reference to an item appearance.
/// </summary>
public record ItemAppearanceReference
{
    /// <summary>
    /// Gets the key for the item appearance.
    /// </summary>
    [JsonPropertyName("key")]
    public Self Key { get; init; }

    /// <summary>
    /// Gets the ID of the item appearance.
    /// </summary>
    [JsonPropertyName("id")]
    public int Id { get; init; }
}

namespace ArgentPonyWarcraftClient;

/// <summary>
/// A summary of a character's specializations.
/// </summary>
public record Glyph
{

    /// <summary>
    /// Gets the glyph's id.
    /// </summary>
    [JsonPropertyName("id")]
    public int id { get; init; }

        /// <summary>
    /// Gets the glyph's name.
    /// </summary>
    [JsonPropertyName("name")]
    public string name { get; init; }
}
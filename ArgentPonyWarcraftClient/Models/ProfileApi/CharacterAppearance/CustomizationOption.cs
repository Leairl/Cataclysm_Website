namespace ArgentPonyWarcraftClient;

/// <summary>
/// A customization option available to a character, such as Hair Style or Horns.
/// </summary>
public record CustomizationOption
{
    /// <summary>
    /// Gets the key for the customization option.
    /// </summary>
    [JsonPropertyName("key")]
    public Self Key { get; init; }

    /// <summary>
    /// Gets the name of the customization option. Not every option is named.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; init; }

    /// <summary>
    /// Gets the ID of the customization option.
    /// </summary>
    [JsonPropertyName("id")]
    public long Id { get; init; }
}

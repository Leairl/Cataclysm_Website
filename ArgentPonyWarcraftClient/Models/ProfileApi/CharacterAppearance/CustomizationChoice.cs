namespace ArgentPonyWarcraftClient;

/// <summary>
/// A choice made for a character customization option.
/// </summary>
public record CustomizationChoice
{
    /// <summary>
    /// Gets the key for the customization choice.
    /// </summary>
    [JsonPropertyName("key")]
    public Self Key { get; init; }

    /// <summary>
    /// Gets the name of the customization choice. Not every choice is named.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; init; }

    /// <summary>
    /// Gets the ID of the customization choice.
    /// </summary>
    [JsonPropertyName("id")]
    public long Id { get; init; }

    /// <summary>
    /// Gets the position of the choice in the list the option offers.
    /// </summary>
    [JsonPropertyName("display_order")]
    public int DisplayOrder { get; init; }
}

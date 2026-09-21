namespace ArgentPonyWarcraftClient;

/// <summary>
/// One of a character's appearance choices: which option, and which choice within it.
/// </summary>
public record CharacterCustomization
{
    /// <summary>
    /// Gets the customization option, such as Hair Style.
    /// </summary>
    [JsonPropertyName("option")]
    public CustomizationOption Option { get; init; }

    /// <summary>
    /// Gets the choice the character has made for the option.
    /// </summary>
    [JsonPropertyName("choice")]
    public CustomizationChoice Choice { get; init; }
}

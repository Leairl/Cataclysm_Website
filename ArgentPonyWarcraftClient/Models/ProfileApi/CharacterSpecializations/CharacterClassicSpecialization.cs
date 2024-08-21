namespace ArgentPonyWarcraftClient;

/// <summary>
/// A specialization for a character.
/// </summary>
public record CharacterClassicSpecialization
{
    [JsonPropertyName("talents")]
    public TalentSelection[] Talents { get; set; }

    [JsonPropertyName("specialization_name")]
    public string SpecializationName { get; set; }

    [JsonPropertyName("spent_points")]
    public long SpentPoints { get; set; }
}

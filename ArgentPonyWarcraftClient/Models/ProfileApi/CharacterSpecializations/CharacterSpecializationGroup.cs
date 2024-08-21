namespace ArgentPonyWarcraftClient;

/// <summary>
/// A summary of a character's specializations.
/// </summary>
public record CharacterSpecializationGroup
{
    [JsonPropertyName("is_active")]
    public bool IsActive {get; init;}
    
    /// <summary>
    /// Gets the character's specializations.
    /// </summary>
    [JsonPropertyName("specializations")]
    public CharacterClassicSpecialization[] Specializations { get; init; }
}
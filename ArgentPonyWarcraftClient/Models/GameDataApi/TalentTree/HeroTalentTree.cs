namespace ArgentPonyWarcraftClient;

/// <summary>
/// Represents a hero talent tree, returned inside the talent tree for a specialization.
/// </summary>
public record HeroTalentTree
{
    /// <summary>
    /// Gets the ID of the hero talent tree.
    /// </summary>
    [JsonPropertyName("id")]
    public long Id { get; init; }

    /// <summary>
    /// Gets the name of the hero talent tree.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; init; }

    /// <summary>
    /// Gets a reference to the media for the hero talent tree.
    /// </summary>
    [JsonPropertyName("media")]
    public TalentTreeMediaReference Media { get; init; }

    /// <summary>
    /// Gets the nodes of the hero talent tree.
    /// </summary>
    [JsonPropertyName("hero_talent_nodes")]
    public TalentNode[] HeroTalentNodes { get; init; }

    /// <summary>
    /// Gets a reference to the playable class the hero talent tree belongs to.
    /// </summary>
    [JsonPropertyName("playable_class")]
    public PlayableClassReference PlayableClass { get; init; }

    /// <summary>
    /// Gets references to the specializations that can choose the hero talent tree.
    /// </summary>
    [JsonPropertyName("playable_specializations")]
    public PlayableSpecializationReference[] PlayableSpecializations { get; init; }
}

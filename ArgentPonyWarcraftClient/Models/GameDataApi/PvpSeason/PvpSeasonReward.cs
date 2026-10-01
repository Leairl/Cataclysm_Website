namespace ArgentPonyWarcraftClient;

/// <summary>
/// A reward for a PvP season.
/// </summary>
public record PvpSeasonReward
{
    /// <summary>
    /// Gets the PvP bracket for the reward.
    /// </summary>
    [JsonPropertyName("bracket")]
    public Bracket Bracket { get; init; }

    /// <summary>
    /// Gets a reference to the achievement associated with this reward.
    /// </summary>
    [JsonPropertyName("achievement")]
    public AchievementReference Achievement { get; init; }

    /// <summary>
    /// Gets the PvP rating cutoff for this reward.
    /// </summary>
    [JsonPropertyName("rating_cutoff")]
    public int RatingCutoff { get; init; }

    /// <summary>
    /// Gets the faction (Alliance or Horde) for this reward.
    /// </summary>
    [JsonPropertyName("faction")]
    public EnumType Faction { get; init; }

    /// <summary>
    /// Gets the specialization this reward is for. Only Solo Shuffle rewards have one, since that
    /// bracket keeps a separate ladder per specialization; null for every other bracket.
    /// </summary>
    [JsonPropertyName("specialization")]
    public PlayableSpecializationReference Specialization { get; init; }
}

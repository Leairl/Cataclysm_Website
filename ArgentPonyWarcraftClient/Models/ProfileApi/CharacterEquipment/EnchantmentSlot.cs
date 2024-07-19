namespace ArgentPonyWarcraftClient;

/// <summary>
/// An Enchantment.
/// </summary>
public record EnchantmentSlot
{
    /// <summary>
    /// Gets the type for the enchantment slot.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; init; }

    /// <summary>
    /// Gets the enchantment slot id.
    /// </summary>
    [JsonPropertyName("id")]
    public int Id { get; init; }
}
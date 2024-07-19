namespace ArgentPonyWarcraftClient;

/// <summary>
/// A reference to an item.
/// </summary>
public record EquippedItemReference
{
    /// <summary>
    /// Gets the key for the item.
    /// </summary>
    [JsonPropertyName("item")]
    public ItemReference Key { get; init; }

    /// <summary>
    /// Gets the name of the item.
    /// </summary>
    [JsonPropertyName("is_equipped")]
    public bool IsEquipped { get; init; }
}

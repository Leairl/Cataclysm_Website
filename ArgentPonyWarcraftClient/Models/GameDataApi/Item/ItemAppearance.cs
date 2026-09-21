namespace ArgentPonyWarcraftClient;

/// <summary>
/// An item appearance: the look an item has, including the display used to render it.
/// </summary>
public record ItemAppearance
{
    /// <summary>
    /// Gets the ID of the item appearance.
    /// </summary>
    [JsonPropertyName("id")]
    public int Id { get; init; }

    /// <summary>
    /// Gets the inventory slot the appearance is worn in.
    /// </summary>
    [JsonPropertyName("slot")]
    public EnumType Slot { get; init; }

    /// <summary>
    /// Gets the item display info ID, used by model viewers to render the appearance.
    /// </summary>
    [JsonPropertyName("item_display_info_id")]
    public int ItemDisplayInfoId { get; init; }
}

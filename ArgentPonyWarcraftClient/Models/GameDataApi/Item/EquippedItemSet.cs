using System.Dynamic;

namespace ArgentPonyWarcraftClient;

/// <summary>
/// Makes EquippedItemSet inherits off ItemSet, and Items also inherits from EquippedItemReference.
/// </summary>
public record EquippedItemSet: ItemSet
{
    [JsonPropertyName("items")]
    public new EquippedItemReference[]  Items {get; init;}
}

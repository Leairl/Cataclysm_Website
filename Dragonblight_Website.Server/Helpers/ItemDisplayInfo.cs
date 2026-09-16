public class ItemDisplayInfo
{
    public ItemDisplayInfo(int itemId, int inventoryType, int itemAppearance, int displayId)
    {
        this.id = itemId;
        this.inventoryType = inventoryType;
        this.itemAppearanceId = itemAppearance;
        this.displayId = displayId;
    }
    public int id { get; set; }
    public int inventoryType { get; set; }
    public int itemAppearanceId { get; set; }
    public int displayId { get; set; }
}

public static class ItemDisplayInfos
{
    public static List<ItemDisplayInfo> data = new List<ItemDisplayInfo>();
}
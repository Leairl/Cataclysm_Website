public class ItemDisplayInfo
{
    //System.Text.Json (used by the Redis cache) cannot bind the constructor below because its
    //parameter names don't match the property names, so it needs a parameterless one to read back into
    public ItemDisplayInfo() { }

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
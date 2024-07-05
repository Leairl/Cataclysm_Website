public static class RegionHelper {
    public static string SimplifyRegion(string fullRegion){
        var RegionSplit = fullRegion.Split("-");
        return RegionSplit[2];
    }
}
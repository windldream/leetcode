class Solution {
  public int maxDepthBST(int[] order) {
    TreeMap<Integer, Integer> tm = new TreeMap<>();
    tm.put(0,0);
    tm.put(Integer.MAX_VALUE,0);
    tm.put(order[0],1);
    int ans = 1;

    for (int i = 1; i < order.length; i++) {
      int val = order[i];
      Map.Entry<Integer,Integer> lower = tm.lowerEntry(val);
      Map.Entry<Integer,Integer> higher = tm.higherEntry(val);
      int depth = Math.max(lower.getValue(),higher.getValue()) + 1;
      tm.put(val,depth);
      ans = Math.max(ans,depth);
    }
    return ans;
  }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
  const res = [];
  if (N % 2 === 0) {
    return res;
  }
  if (N === 1) {
    const node = new TreeNode(0);
    res.push(node);
    return res;
  }

  for (let i = 1; i < N; i += 2) {
    const lnodes = allPossibleFBT(i);
    const rnodes = allPossibleFBT(N - 1 - i);

    for (let lnode of lnodes) {
      for (let rnode of rnodes) {
        const node = new TreeNode(0);
        node.left = lnode;
        node.right = rnode;
        res.push(node);
      }
    }
  }

  return res;
};

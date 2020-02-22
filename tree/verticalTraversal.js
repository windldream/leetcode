/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  const res = [];
  let min = Infinity,
    max = -Infinity;
  preOrder(root, 0, 0);
  const ans = [];
  for (let i = min; i <= max; i++) {
    const nodes = res
      .filter(item => {
        return item.x === i;
      })
      .sort((a, b) => {
        if (a.y === b.y) {
          return a.val - b.val;
        } else {
          return b.y - a.y;
        }
      })
      .map(item => item.val);
    ans.push(nodes);
  }
  return ans;

  function preOrder(root, x, y) {
    if (root === null) {
      return;
    }
    if (root.left) {
      preOrder(root.left, x - 1, y - 1);
    }
    res.push({ val: root.val, x, y });
    min = Math.min(min, x);
    max = Math.max(max, x);
    if (root.right) {
      preOrder(root.right, x + 1, y - 1);
    }
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let t1, t2, pre;
  inOrder(root);
  let temp = t1.val;
  t1.val = t2.val;
  t2.val = temp;

  function inOrder(root) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    // 交换错误节点
    if (pre && pre.val > root.val) {
      if (!t1) {
        t1 = pre;
      }
      t2 = root;
    }
    pre = root;
    inOrder(root.right);
  }
};

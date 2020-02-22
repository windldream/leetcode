/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  const res = [];
  inorder(root);

  if (res.length === 0) {
    return null;
  }

  const val = res.shift();
  let temp = new TreeNode(val);
  const head = temp;
  while (res.length) {
    const val = res.shift();
    temp.right = new TreeNode(val);
    temp = temp.right;
  }

  return head;

  function inorder(root) {
    if (root === null) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  const len = pre.length;
  if (len === 0) {
    return null;
  }

  const root = new TreeNode(pre[0]);
  if (len === 1) {
    return root;
  }

  // 左分支有多少节点
  const l = post.indexOf(pre[1]) + 1;

  root.left = constructFromPrePost(pre.slice(1, l + 1), post.slice(0, l));
  root.right = constructFromPrePost(
    pre.slice(l + 1, len),
    post.slice(l, len - 1)
  );

  return root;
};

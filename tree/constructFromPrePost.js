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
  return helper(pre, 0, pre.length - 1, post, 0, post.length - 1);

  function helper(pre, preStart, preEnd, post, postStart, postEnd) {
    if (preStart > preEnd || postStart > postEnd) return null;
    const val = pre[preStart];
    const root = new TreeNode(val);
    if (preStart === preEnd) {
      return null;
    }
    const rootIndex = post.indexOf(pre[preStart + 1], preStart);
    const leftNum = rootIndex - postStart + 1;

    root.left = helper(
      pre,
      preStart + 1,
      preStart + leftNum,
      post,
      postStart,
      rootIndex
    );
    root.right = helper(
      pre,
      preStart + leftNum + 1,
      preEnd,
      post,
      rootIndex + 1,
      postEnd - 1
    );
    return root;
  }
};

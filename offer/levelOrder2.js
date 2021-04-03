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
var levelOrder = function (root) {
  if (root === null) return []

  let stack = [root]
  const ans = []
  let level = 0
  while (stack.length) {
    const tmp = []
    ans[level] = []
    for (let i = 0; i < stack.length; i++) {
      const node = stack[i]
      ans[level].push(node.val)
      if (node.left) tmp.push(node.left)
      if (node.right) tmp.push(node.right)
    }
    level += 1
    stack = tmp
  }
  return ans
}

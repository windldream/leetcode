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

  const ans = []
  let stack = [root]
  let isLeft = false
  while (stack.length) {
    const tmp = []
    const list = []
    for (let i = 0; i < stack.length; i++) {
      const node = stack[i]
      list.push(node.val)
      if (node.left) tmp.push(node.left)
      if (node.right) tmp.push(node.right)
    }
    if (isLeft) list.reverse()
    ans.push(list)
    stack = tmp
    isLeft = !isLeft
  }
  return ans
}

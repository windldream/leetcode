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
var verticalOrder = function (root) {
  if (root === null) return []
  const queue = []
  queue.push([root, 0])
  const arr = []
  let minCol = Infinity
  let maxCol = -Infinity
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const [node, index] = queue.shift()
      arr.push([node.val, index])
      minCol = Math.min(minCol, index)
      maxCol = Math.max(maxCol, index)
      if (node.left) {
        queue.push([node.left, index - 1])
      }
      if (node.right) {
        queue.push([node.right, index + 1])
      }
    }
  }

  const ans = []
  for (let i = minCol; i <= maxCol; i++) {
    ans.push(arr.filter((item) => item[1] === i).map((item) => item[0]))
  }
  return ans
}

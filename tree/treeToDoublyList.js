/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) return root

  let pre = new Node()
  const ans = pre
  const stack = []
  while (root !== null || stack.length) {
    if (root !== null) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      pre.right = root
      root.left = pre
      pre = root
      root = root.right
    }
  }
  pre.right = ans.right
  ans.right.left = pre
  return ans.right
}

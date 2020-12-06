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
  const arr = []
  inorder(root)
  const head = new Node()
  let cur = head
  for (let i = 0; i < arr.length; i++) {
    const node = new Node(arr[i])
    cur.right = node
    node.left = cur
    cur = cur.right
    if (i === arr.length - 1) {
      node.right = head.right
      head.right.left = node
    }
  }
  return head.right

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    arr.push(root.val)
    inorder(root.right)
  }
}

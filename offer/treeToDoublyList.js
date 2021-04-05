/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) return null
  const ans = []
  inorder(root)
  const dummy = new Node()
  let cur = dummy
  for (let i = 0; i < ans.length; i++) {
    cur.right = new Node(ans[i])
    cur.right.left = cur
    cur = cur.right
  }
  cur.right = dummy.right
  dummy.right.left = cur
  return dummy.right

  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    ans.push(root.val)
    inorder(root.right)
  }
}

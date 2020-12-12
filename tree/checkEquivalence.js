/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? " " : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root1
 * @param {Node} root2
 * @return {boolean}
 */
var checkEquivalence = function (root1, root2) {
  const str1 = postorder(root1)
  const str2 = postorder(root2)
  return str1.split('&').sort().join('&') === str2.split('&').sort().join('&')

  function postorder(root) {
    if (root === null) return ''
    const l = postorder(root.left)
    const r = postorder(root.right)
    if (root.val === '+') {
      return l + '&' + r
    }
    return root.val
  }
}

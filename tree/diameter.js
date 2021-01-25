/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function (root) {
  if (root === null) return 0
  let ans = 0
  getHeight(root)
  return ans

  function getHeight(root) {
    if (root === null) return 0
    let h = 0
    let max1 = 0
    let max2 = 0
    for (const child of root.children) {
      const height = getHeight(child) + 1
      if (max1 === 0) {
        max1 = height
      } else if (max2 === 0) {
        if (height > max1) {
          max2 = max1
          max1 = height
        } else {
          max2 = height
        }
      } else {
        if (height > max1) {
          max2 = max1
          max1 = height
        } else if (height > max2) {
          max2 = height
        }
      }
      ans = Math.max(ans, max1 + max2)
      h = Math.max(h, height)
    }
    return h
  }
}

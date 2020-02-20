/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  return getMax(root);

  function getMax(root) {
    if (root === null) {
      return 0;
    }
    let max = 0;
    const childrens = root.children;
    if (childrens && childrens.length) {
      for (let children of childrens) {
        max = Math.max(max, getMax(children));
      }
    }
    return max + 1;
  }
};

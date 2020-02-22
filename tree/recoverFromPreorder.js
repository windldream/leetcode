/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
  return helper(S);

  function helper(str) {
    if (str === '') {
      return;
    }
    let index = str.indexOf('-');
    if (index === -1) {
      index = str.length;
    }
    const root = new TreeNode(str.substring(0, index));
    if (str.length === index) {
      return root;
    }
    let lIndex = -1,
      rIndex = -1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === '-' && str[i - 1] !== '-' && str[i + 1] !== '-') {
        if (lIndex === -1) {
          lIndex = i;
        } else {
          rIndex = i;
        }
      }
    }

    if (lIndex > -1 && rIndex > -1) {
      const lStr = str.substring(index, rIndex).replace(/-(\d)/g, '$1');
      const rStr = str.substring(rIndex).replace(/-(\d)/g, '$1');
      root.left = helper(lStr);
      root.right = helper(rStr);
    } else if (lIndex > -1) {
      root.left = helper(str.substring(index).replace(/-(\d)/g, '$1'));
    }

    return root;
  }
};

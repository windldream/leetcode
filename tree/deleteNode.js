/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      const successor = minNode(root.right);
      successor.right = deleteMin(root.right);
      successor.left = root.left;
      return successor;
    }
  }

  function minNode(node) {
    if (node.left === null) {
      return node;
    }
    return minNode(node.left);
  }

  function deleteMin(node) {
    if (node.left === null) {
      return node.right;
    }
    node.left = deleteMin(node.left);
    return node;
  }
};

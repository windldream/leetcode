/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {

  return helper(1, n);
  
  function helper(start, end) {
    let allTrees = [];

    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }

    for (let i = start; i <= end; i++) {
      let leftTrees = helper(start, i - 1),
        rightTrees = helper(i + 1, end);
      
      for (let l = 0; l < leftTrees.length; l++) {
        for (let r = 0; r < rightTrees.length; r++) {
          const arr = [i];
          let treeNode = new TreeNode(i);
          treeNode.left = leftTrees[l];
          treeNode.right = rightTrees[r];
          bfs(treeNode, arr)
          allTrees.push(arr);
        }
      }
    }

    return allTrees;
  }

  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  function bfs(tree, arr) {
    if (!tree) {
      return;
    }
    arr.push(tree.val);
    bfs(tree.left, arr);
    bfs(tree.right, arr);
  }
};

console.log(generateTrees(3));
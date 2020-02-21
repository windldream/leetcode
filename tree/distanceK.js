/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
  const graph = {};
  buildGraph(null, root);
  const res = [],
    seen = new Set(),
    queue = [];
  seen.add(target.val);
  queue.push(target.val);
  let k = 0;
  while (queue.length && k <= K) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const val = queue.shift();
      if (k === K) {
        res.push(val);
      }
      if (!graph[val]) {
        continue;
      }
      for (const nodeVal of graph[val]) {
        if (seen.has(nodeVal)) {
          continue;
        }
        queue.push(nodeVal);
        seen.add(nodeVal);
      }
    }
    k++;
  }

  return res;

  function buildGraph(parent, child) {
    if (parent) {
      if (graph[parent.val]) {
        graph[parent.val].push(child.val);
      } else {
        graph[parent.val] = [];
        graph[parent.val].push(child.val);
      }

      if (graph[child.val]) {
        graph[child.val].push(parent.val);
      } else {
        graph[child.val] = [];
        graph[child.val].push(parent.val);
      }
    }

    if (child.left) {
      buildGraph(child, child.left);
    }
    if (child.right) {
      buildGraph(child, child.right);
    }
  }
};

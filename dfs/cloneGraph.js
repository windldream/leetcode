/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const seen = [];
  return dfs(node);

  function dfs(node) {
    if (node === null) {
      return;
    }
    if (seen[node.val]) {
      return seen[node.val];
    }
    const clone = new Node(node.val, []);
    seen[node.val] = clone;
    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }
};

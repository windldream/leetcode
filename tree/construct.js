/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  return buildQuadTree(grid, 0, 0, grid.length)

  function buildQuadTree(grid, x, y, offset) {
    if (offset <= 0) return null
    for (let i = x; i < x + offset; i++) {
      for (let j = y; j < y + offset; j++) {
        if (grid[i][j] !== grid[x][y]) {
          offset = offset >> 1
          return new Node(
            false,
            false,
            buildQuadTree(grid, x, y, offset),
            buildQuadTree(grid, x, y + offset, offset),
            buildQuadTree(grid, x + offset, y, offset),
            buildQuadTree(grid, x + offset, y + offset, offset)
          )
        }
      }
    }
    return new Node(grid[x][y], true, null, null, null, null)
  }
}

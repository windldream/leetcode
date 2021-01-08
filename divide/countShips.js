/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
const countShips = function (sea, topRight, bottomLeft) {
  return divide(sea, topRight, bottomLeft)

  function divide(sea, topRight, bottomLeft) {
    if (!sea.hasShips(topRight, bottomLeft)) return 0
    const [startX, startY] = bottomLeft
    const [endX, endY] = topRight
    if (startX > endX || startY > endY) return 0
    if (startX === endX && startY === endY) return 1

    const midX = (startX + endX) >> 1
    const midY = (startY + endY) >> 1
    return (
      divide(sea, [midX, midY], bottomLeft) +
      divide(sea, topRight, [midX + 1, midY + 1]) +
      divide(sea, [endX, midY], [midX + 1, startY]) +
      divide(sea, [midX, endY],[startX, midY + 1])
    )
  }
}

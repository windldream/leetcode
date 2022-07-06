/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  const queue = [[0, 0]]
  const seen = new Set()

  while (queue.length) {
    const [x, y] = queue.shift()

    if (seen.has(x + '&' + y)) continue

    if (x === targetCapacity || y === targetCapacity || x + y === targetCapacity) return true

    seen.add(x + '&' + y)

    queue.push([jug1Capacity, y])
    queue.push([x, jug2Capacity])
    queue.push([0, y])
    queue.push([x, 0])
    queue.push([x - Math.min(x, jug2Capacity - y), y + Math.min(x, jug2Capacity - y)])
    queue.push([x + Math.min(y, jug1Capacity - x), y - Math.min(y, jug1Capacity - x)])
  }

  return false
}

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const total = distance.reduce((prev, cur) => prev + cur, 0)
  let clockwise = 0
  if (start > destination) {
    ;[start, destination] = [destination, start]
  }
  for (let i = start; i < destination; i++) {
    clockwise += distance[i]
  }
  return Math.min(clockwise, total - clockwise)
}

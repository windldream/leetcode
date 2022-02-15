/**
 * @param {number[][]} lights
 * @return {number}
 */
var brightestPosition = function (lights) {
  const positions = lights.map(([pos, range]) => [pos - range, pos + range + 1])
  const map = Object.create(null)

  for (const [start, end] of positions) {
    if (map[start] === undefined) map[start] = 0
    if (map[end] === undefined) map[end] = 0
    map[start] += 1
    map[end] -= 1
  }

  const keys = Object.keys(map).sort((a, b) => +a - +b)
  let lastPos = 0
  let sum = 0
  let ans = 0
  let max = 0

  for (const pos of keys) {
    if (sum !== 0) {
      if (sum > max) {
        max = sum
        ans = lastPos
      }
    }
    sum += map[pos]
    lastPos = pos
  }

  return ans
}

/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
  towers.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    return a[0] - b[0]
  })
  const len = towers.length
  let maxSignal = 0
  let x = 0
  let y = 0
  for (let i = 0; i <= 50; i++) {
    for (let j = 0; j <= 50; j++) {
      let sum = 0
      for (const [dx, dy, q] of towers) {
        const dis = getDis([i, j], [dx, dy])
        if (dis <= radius) {
          const signal = getSignal(q, dis)
          sum += signal
        }
      }
      if (sum > maxSignal) {
        x = i
        y = j
        maxSignal = sum
      }
    }
  }
  return [x, y]

  function getDis(p1, p2) {
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)
  }

  function getSignal(q, d) {
    return Math.floor(q / (1 + d))
  }
}

bestCoordinate(
  [
    [50, 20, 31],
    [43, 36, 29]
  ],
  38
)

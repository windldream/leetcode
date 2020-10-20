/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const minutes = 24 * 60
  const times = timePoints.map((item) => {
    const [h, m] = item.split(':')
    return h * 60 + +m
  })

  let min = Infinity
  for (let i = 0; i < times.length; i++) {
    for (let j = i + 1; j < times.length; j++) {
      const diff = Math.abs(times[i] - times[j])
      min = Math.min(min, diff, minutes - diff)
    }
  }
  return min
}

findMinDifference(['23:59', '00:00'])

/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const ans = Array(rains.length).fill(1)
  const map = new Map()
  const zeros = []
  for (let i = 0; i < rains.length; i++) {
    const rain = rains[i]
    if (rain === 0) {
      zeros.push(i)
      continue
    }
    if (map.has(rain) > 0) {
      const index = zeros.find((val) => val > map.get(rain))
      if (!index) return []
      ans[index] = rain
      zeros.splice(zeros.indexOf(index), 1)
    }
    map.set(rain, i)
    ans[i] = -1
  }
  return ans
}

avoidFlood([1, 2, 0, 1, 2])

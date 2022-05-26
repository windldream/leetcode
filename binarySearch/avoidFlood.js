/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const n = rains.length
  const water = new Map()
  const zero = []
  const ans = []

  for (let i = 0; i < n; i++) {
    const r = rains[i]

    if (r === 0) {
      zero.push(i)
    } else {
      if (water.has(r)) {
        const [day, idx] = find(zero, water.get(r))
        if (day === -1) return []
        ans[day] = r
        zero.splice(idx, 1)
      }

      water.set(r, i)
      ans[i] = -1
    }
  }

  return ans

  function find(zero, d) {
    let l = 0
    let r = zero.length - 1
    let ans = -1
    let idx = -1

    while (l <= r) {
      const mid = (l + r) >> 1

      if (zero[mid] > d) {
        ans = zero[mid]
        idx = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    return [ans, idx]
  }
}

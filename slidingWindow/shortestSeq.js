/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
var shortestSeq = function (big, small) {
  const len = big.length
  if (len === 0) return []
  let l = 0
  let r = 0
  let ans = []
  const map = new Map()
  while (r < len) {
    if (!map.has(big[r])) {
      map.set(big[r], 0)
    }
    map.set(big[r], map.get(big[r]) + 1)
    while (check(map, small)) {
      if (ans.length === 0) {
        ans = [l, r]
      } else {
        if (r - l + 1 < ans[1] - ans[0] + 1) {
          ans = [l, r]
        }
      }
      map.set(big[l], map.get(big[l]) - 1)
      if (map.get(big[l]) === 0) {
        map.delete(big[l])
      }
      l++
    }
    r++
  }

  return ans

  function check(a, b) {
    return b.every((val) => a.has(val))
  }
}

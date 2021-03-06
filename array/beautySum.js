/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  const n = s.length
  const counter = Array(26).fill(0)
  const preSum = Array(n)
    .fill(0)
    .map(() => [])
  preSum[0] = counter.slice()
  for (let i = 0; i < n; i++) {
    counter[toIndex(s[i])] += 1
    preSum[i + 1] = counter.slice()
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const l = preSum[i]
      const r = preSum[j]
      let max = -Infinity
      let min = Infinity
      for (let k = 0; k < 26; k++) {
        const count = r[k] - l[k]
        if (count > 0) {
          max = Math.max(max, count)
          min = Math.min(min, count)
        }
      }
      ans += min === Infinity ? 0 : max - min
    }
  }
  return ans

  function toIndex(c) {
    return c.charCodeAt() - 'a'.charCodeAt()
  }
}

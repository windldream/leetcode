/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function (s, result) {
  const cache = new Map()
  return countVal(s, result)

  function countVal(s, result) {
    const n = s.length
    if (n === 0) return 0
    if (n === 1) return +s[0] === result ? 1 : 0
    if (cache.has(s + '&' + result)) return cache.get(s + '&' + result)

    let cnt = 0
    for (let i = 1; i < n; i += 2) {
      const left = s.substring(0, i)
      const right = s.substring(i + 1)
      const leftTrue = countVal(left, 1)
      const leftFalse = countVal(left, 0)
      const rightTrue = countVal(right, 1)
      const rightFalse = countVal(right, 0)
      const total = (leftTrue + leftFalse) * (rightTrue + rightFalse)

      let totalTrue = 0
      if (s[i] === '^') {
        totalTrue = leftFalse * rightTrue + leftTrue * rightFalse
      } else if (s[i] === '&') {
        totalTrue = leftTrue * rightTrue
      } else if (s[i] === '|') {
        totalTrue = leftTrue * rightFalse + leftTrue * rightTrue + leftFalse * rightTrue
      }

      cnt += result ? totalTrue : total - totalTrue
    }
    cache.set(s + '&' + result, cnt)
    return cnt
  }
}

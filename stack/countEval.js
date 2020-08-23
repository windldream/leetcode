/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function (s, result) {
  const memo = new Map()
  return getVal(s, result, memo)

  function getVal(s, result, memo) {
    if (s.length === 0) return 0
    if (s.length === 1) return +s[0] == result ? 1 : 0
    if (memo.has(result + '$' + s)) return memo.get(result + '$' + s)

    let ways = 0
    for (let i = 1; i < s.length; i += 2) {
      let left = s.substring(0, i)
      let right = s.substring(i + 1)
      let leftTrue = getVal(left, 1, memo)
      let leftFalse = getVal(left, 0, memo)
      let rightTrue = getVal(right, 1, memo)
      let rightFalse = getVal(right, 0, memo)
      let total = (leftTrue + leftFalse) * (rightTrue + rightFalse)

      let totalTrue = 0
      if (s[i] === '^') {
        totalTrue = leftTrue * rightFalse + leftFalse * rightTrue
      } else if (s[i] === '&') {
        totalTrue = leftTrue * rightTrue
      } else if (s[i] === '|') {
        totalTrue = leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue
      }

      ways += result ? totalTrue : total - totalTrue
    }

    memo.set(result + '$' + s, ways)
    return ways
  }
}

/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function (S) {
  const len = S.length
  const left = Array(len).fill(0)
  let total = 0
  for (let i = 0; i < len; i++) {
    total += S[i] === '1'
    left[i] = total
  }

  const right = Array(len + 1).fill(0)
  total = 0
  for (let i = len - 1; i >= 0; i--) {
    total += S[i] === '0'
    right[i] = total
  }

  let ans = len - left[len - 1]
  for (let i = 0; i < len; i++) {
    ans = Math.min(ans, left[i] + right[i + 1])
  }
  return ans
}

minFlipsMonoIncr('11011')

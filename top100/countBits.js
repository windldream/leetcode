/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const ans = []
  ans[0] = 0
  for (let i = 1; i <= num; i++) {
    ans[i] = ans[i & (i - 1)] + 1
  }
  return ans
}

// i & (i - 1)

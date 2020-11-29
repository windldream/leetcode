/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const len = s.length
  const suffixa = Array(len).fill(0)
  const prefixb = Array(len).fill(0)

  for (let i = 1; i < len; i++) {
    prefixb[i] = prefixb[i - 1] + (s[i - 1] === 'b' ? 1 : 0)
  }

  for (let i = len - 2; i >= 0; i--) {
    suffixa[i] = suffixa[i + 1] + (s[i + 1] === 'a' ? 1 : 0)
  }

  let ans = Infinity
  for (let i = 0; i < len; i++) {
    ans = Math.min(ans, prefixb[i] + suffixa[i])
  }
  return ans
}

minimumDeletions('bbaaaaabb')

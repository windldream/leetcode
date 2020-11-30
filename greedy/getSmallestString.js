/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let ans = ''
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 26; j++) {
      if ((n - i) * 26 + j >= k) {
        const c = String.fromCharCode(j - 1 + 'a'.charCodeAt())
        ans += c
        k -= j
        break
      }
    }
  }
  return ans
}

getSmallestString(5, 73)

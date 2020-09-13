/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let l = 0
  let r = 0
  let ans = 0
  let count = 0
  while (r < s.length) {
    count += vowels.includes(s[r]) ? 1 : 0
    if (r - l + 1 === k) {
      ans = Math.max(ans, count)
      count -= vowels.includes(s[l]) ? 1 : 0
      l++
    }
    ans = Math.max(ans, count)
    r++
  }
  return ans
}

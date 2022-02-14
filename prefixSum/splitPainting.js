/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  let count = 0
  const baseCode = 'a'.charCodeAt()

  // 枚举左右两侧字符
  for (let i = 0; i < 26; i++) {
    const middles = Array(26).fill(0)
    const char = String.fromCharCode(i + baseCode)
    const l = s.indexOf(char)
    const r = s.lastIndexOf(char)

    // 枚举中间字符
    for (let j = l + 1; j < r; j++) {
      middles[s[j].charCodeAt() - baseCode] += 1
    }

    for (let j = 0; j < 26; j++) {
      if (middles[j] > 0) count++
    }
  }

  return count
}

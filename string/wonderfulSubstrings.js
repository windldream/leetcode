/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  const cnt = Array(1024).fill(0)
  const aCharCode = 'a'.charCodeAt()
  let ans = 0
  let pre = 0
  cnt[0] = 1

  for (const ch of word) {
    // 计算当前字符的前缀和
    pre = pre ^ (1 << (ch.charCodeAt() - aCharCode))

    // 前缀和相同则两个前缀之间的字符串必定满足条件
    // 统计所有字母都出现偶数次的次数
    ans += cnt[pre]

    // 枚举其中一个字母出现奇数次的个数
    for (let i = 1; i < 1024; i = i << 1) {
      ans += cnt[pre ^ i]
    }

    cnt[pre]++
  }

  return ans
}

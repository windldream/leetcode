/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var minCharacters = function (a, b) {
  const countera = Array(26).fill(0)
  const counterb = Array(26).fill(0)
  for (const c of a) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    countera[index]++
  }
  for (const c of b) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    counterb[index]++
  }

  const prea = Array(27).fill(0)
  const preb = Array(27).fill(0)
  for (let i = 1; i < 27; i++) {
    prea[i] = prea[i - 1] + countera[i - 1]
    preb[i] = preb[i - 1] + counterb[i - 1]
  }

  let ans = Infinity
  const totalLen = a.length + b.length
  for (let i = 0; i < 26; i++) {
    ans = Math.min(ans, totalLen - countera[i] - counterb[i])
    // 替换 a 中大于 i 索引对应的字母
    if (i > 0) ans = Math.min(ans, a.length - prea[i] + preb[i])
    // 替换 b 中小于 i 索引对应的字母
    if (i < 26) ans = Math.min(ans, b.length - preb[i] + prea[i])
  }
  return ans
}

minCharacters('a', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')
// ece aba

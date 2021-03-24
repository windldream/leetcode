/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = []
  const sArr = Array(26).fill(0)
  const pArr = Array(26).fill(0)
  for (const c of p) {
    const index = c.charCodeAt() - 'a'.charCodeAt()
    pArr[index] += 1
  }

  let l = 0
  let r = 0
  const n = s.length
  while (r < n) {
    const index = s[r].charCodeAt() - 'a'.charCodeAt()
    sArr[index] += 1
    r++
    while (sArr[index] > pArr[index]) {
      const index = s[l].charCodeAt() - 'a'.charCodeAt()
      sArr[index] -= 1
      l++
    }
    if (r - l === p.length) {
      ans.push(l)
    }
  }
  return ans
}

findAnagrams('cbaebabacd', 'abc')

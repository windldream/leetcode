/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function (A, B) {
  const bmax = Array(26).fill(0)
  for (const word of B) {
    const counts = count(word)
    for (let i = 0; i < 26; i++) {
      bmax[i] = Math.max(bmax[i], counts[i])
    }
  }

  const ans = []
  outer: for (const word of A) {
    const counts = count(word)
    for (let i = 0; i < 26; i++) {
      if (counts[i] < bmax[i]) continue outer
    }
    ans.push(word)
  }
  return ans

  function count(word) {
    const ans = Array(26).fill(0)
    for (const c of word) {
      ans[c.charCodeAt() - 'a'.charCodeAt()] += 1
    }
    return ans
  }
}

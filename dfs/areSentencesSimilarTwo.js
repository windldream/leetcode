/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilarTwo = function (words1, words2, pairs) {
  if (words1.length !== words2.length) return false

  const uf = {}
  for (const [x, y] of pairs) {
    if (!uf[x]) {
      uf[x] = x
    }
    if (!uf[y]) {
      uf[y] = y
    }
    const u = find(x)
    const v = find(y)
    if (u !== v) {
      union(u, v)
    }
  }

  for (let i = 0; i < words1.length; i++) {
    const u = find(words1[i])
    const v = find(words2[i])
    if (u !== v) return false
  }
  return true

  function find(x) {
    if (x !== uf[x]) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    uf[u] = v
  }
}

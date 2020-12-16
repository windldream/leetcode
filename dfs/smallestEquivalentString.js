/**
 * @param {string} A
 * @param {string} B
 * @param {string} S
 * @return {string}
 */
const smallestEquivalentString = function(A, B, S) {
  const uf = {}
  const len = A.length
  for (let i = 0; i < len; i++) {
    const a = A[i]
    const b = B[i]
    if (!uf[a]) {
      uf[a] = a
    }
    if (!uf[b]) {
      uf[b] = b
    }
    const u = find(a)
    const v = find(b)
    if (u !== v) union(u, v)
  }

  let ans = ''
  for (const s of S) {
    const str = find(s)
    ans += str ? str : s
  }
  return  ans

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    if (u > v) {
      uf[u] = v
    } else  {
      uf[v] = u
    }
  }
};
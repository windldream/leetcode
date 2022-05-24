/**
 * @param {string[]} A
 * @return {number}
 */
var numSimilarGroups = function (A) {
  if (A.length < 2) return A.length
  const unionFind = Array(2000).fill(-1)
  const len = A.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const t1 = find(i)
      const t2 = find(j)
      if (t1 === t2) continue
      if (isSimilar(A[i], A[j])) {
        union(i, j)
      }
    }
  }

  let res = 0
  for (let i = 0; i < len; i++) {
    if (unionFind[i] === -1) {
      res += 1
    }
  }
  return res

  function find(x) {
    if (unionFind[x] === -1) return x
    return (unionFind[x] = find(unionFind[x]))
  }

  // 把 a 的祖先指向 b 的祖先
  function union(a, b) {
    const t1 = find(a)
    const t2 = find(b)
    if (t1 !== t2) {
      unionFind[t1] = t2
    }
  }

  function isSimilar(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count += 1
      }
    }
    return count <= 2
  }
}

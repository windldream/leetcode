/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  const n = strs.length
  const unionFind = Array(300).fill(-1)

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const x = find(i)
      const y = find(j)

      if (isSimilar(strs[i], strs[j]) && x !== y) union(x, y)
    }
  }

  let count = 0

  for (let i = 0; i < n; i++) {
    if (unionFind[i] === -1) count++
  }

  return count

  function union(x, y) {
    unionFind[y] = x
  }

  function find(x) {
    const y = unionFind[x]
    return y === -1 ? x : (unionFind[x] = find(y))
  }

  function isSimilar(a, b) {
    let diffIndex = -1
    let count = 0

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count++
        if (count > 2) return false

        if (diffIndex === -1) {
          diffIndex = i
        } else {
          if (a[diffIndex] !== b[i] || b[diffIndex] !== a[i]) return false
        }
      }
    }

    return true
  }
}

numSimilarGroups(['tars', 'rats', 'arts', 'star'])

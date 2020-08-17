/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  const res = []
  for (let i = 0; i < queries.length; i++) {
    res.push(isMatch(queries[i], pattern))
  }
  return res

  function isMatch(query, pattern) {
    let index1 = 0,
      index2 = 0
    const len1 = query.length,
      len2 = pattern.length

    while (index1 < len1 && index2 < len2) {
      const c1 = query[index1]
      const c2 = pattern[index2]
      if (c1 === c2) {
        index1++
        index2++
      } else {
        if (c1 >= 'A' && c1 <= 'Z') return false
        index1++
      }
    }

    if (index2 !== len2) return false
    while (index1 < len1) {
      const c1 = query[index1]
      if (c1 >= 'A' && c1 <= 'Z') return false
      index1++
    }
    return true
  }
}

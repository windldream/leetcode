/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
var peopleIndexes = function (favoriteCompanies) {
  const len = favoriteCompanies.length
  const ans = []
  outer: for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      if (isSubset(favoriteCompanies[i], favoriteCompanies[j])) {
        continue outer
      }
    }
    ans.push(i)
  }
  return ans

  function isSubset(a, b) {
    return a.every((val) => b.includes(val))
  }
}

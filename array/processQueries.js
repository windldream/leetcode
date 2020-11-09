/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  const p = Array(m)
    .fill(0)
    .map((val, index) => index + 1)
  const ans = []
  for (const query of queries) {
    const index = p.indexOf(query)
    ans.push(index)
    p.splice(index, 1)
    p.unshift(query)
  }
  return ans
}

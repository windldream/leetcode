/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function (n, restrictions) {
  if (restrictions.length === 0) return n - 1

  restrictions.push([1, 0])
  restrictions.sort((a, b) => a[0] - b[0])
  if (restrictions[restrictions.length - 1][0] !== n) {
    restrictions.push([n, n - 1])
  }

  const m = restrictions.length
  for (let i = 1; i < m; i++) {
    restrictions[i][1] = Math.min(
      restrictions[i][1],
      restrictions[i - 1][1] + (restrictions[i][0] - restrictions[i - 1][0])
    )
  }

  for (let i = m - 2; i >= 0; i--) {
    restrictions[i][1] = Math.min(
      restrictions[i][1],
      restrictions[i + 1][1] + (restrictions[i + 1][0] - restrictions[i][0])
    )
  }

  let ans = 0
  for (let i = 0; i < m - 1; i++) {
    ans = Math.max(
      ans,
      (restrictions[i + 1][0] - restrictions[i][0] + restrictions[i][1] + restrictions[i + 1][1]) >> 1
    )
  }
  return ans
}

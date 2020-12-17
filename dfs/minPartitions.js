/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = function (n) {
  let ans = +n[0]
  for (let i = 1; i < n.length; i++) {
    ans = Math.max(ans, +n[i])
  }
  return ans
}

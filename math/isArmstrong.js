/**
 * @param {number} N
 * @return {boolean}
 */
var isArmstrong = function(N) {
  const n = N + ''
  const k = n.length
  let ans = 0
  for (let i = 0; i < k; i++) {
    ans += Math.pow(+n[i], k)
  }
  return ans === N
};
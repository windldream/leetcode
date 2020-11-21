/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  const ans = new Set()
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      ans.add(i)
      ans.add(n / i)
    }
  }
  return ans.size < k ? -1 : [...ans].sort((a, b) => a - b)[k - 1]
}

kthFactor(12)

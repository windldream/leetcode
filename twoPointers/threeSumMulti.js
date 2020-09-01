/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function (A, target) {
  const max = 100
  const MOD = 10 ** 9 + 7
  const count = Array(max + 1).fill(0)
  for (let i = 0; i < A.length; i++) {
    count[A[i]] += 1
  }

  let ans = 0
  label: for (let i = 0; i <= target; i++) {
    for (let j = i; j <= target; j++) {
      const k = target - i - j
      if (k < 0 || k < j) continue label
      if (i > 100 || j > 100 || k > 100) continue
      if (i === j && j === k) {
        ans += ((count[i] - 2) * (count[i] - 1) * count[i]) / 6
      } else if (i === j && j !== k) {
        ans += ((count[i] * (count[i] - 1)) / 2) * count[k]
      } else if (i !== j && j === k) {
        ans += (count[i] * count[j] * (count[j] - 1)) / 2
      } else {
        ans += count[i] * count[j] * count[k]
      }
    }
  }
  return ans % MOD
}

threeSumMulti([0, 0, 0], 0)

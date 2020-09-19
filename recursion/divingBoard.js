/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
  if (k === 0) return []
  if (shorter === longer) return [shorter * k]

  const ans = Array(k + 1).fill(0)
  for (let i = 0; i <= k; i++) {
    ans[i] = shorter * (k - i) + longer * i
  }
  return ans
}

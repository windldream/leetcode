/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  const maxPos = 2 * 10 ** 5
  const maxLen = maxPos + 2
  const sum = Array(maxLen).fill(0)
  const posList = Array(maxLen).fill(0)

  for (const [pos, amout] of fruits) {
    posList[pos] = amout
  }

  for (let i = 0; i < maxLen; i++) {
    sum[i + 1] = posList[i] + sum[i]
  }

  let ans = 0

  for (let i = 0; i <= k; i++) {
    if (startPos - i < 0) break
    const right = Math.min(maxPos, startPos + k - 2 * i)
    ans = Math.max(ans, sum[right + 1] - sum[startPos - i])
  }

  for (let i = 0; i < k; i++) {
    if (startPos + i > maxPos) break
    const left = Math.max(0, startPos - k + 2 * i)
    ans = Math.max(ans, sum[startPos + i + 1] - sum[left])
  }

  return ans
}

/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
const kthSmallestPath = function (destination, k) {
  let [v, h] = destination
  const comb = Array(h + v)
    .fill(0)
    .map(() => Array(h).fill(0))
  comb[0][0] = 1
  for (let i = 1; i < h + v; i++) {
    comb[i][0] = 1
    for (let j = 1; j <= i && j < h; j++) {
      comb[i][j] = comb[i - 1][j - 1] + comb[i - 1][j]
    }
  }

  let ans = ''
  for (let i = 0, len = h + v; i < len; i++) {
    if (h > 0) {
      const count = comb[h + v - 1][h - 1]
      if (k > count) {
        ans += 'V'
        v--
        k -= count
      } else {
        ans += 'H'
        h--
      }
    } else {
      ans += 'V'
      v--
    }
  }
  return ans
}

kthSmallestPath([2, 3], 1)

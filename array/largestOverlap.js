/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
  const len = img1.length
  const count = Array(2 * len + 1)
    .fill(0)
    .map(() => Array(2 * len + 1).fill(0))
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (img1[i][j] === 1) {
        for (let i2 = 0; i2 < len; i2++) {
          for (let j2 = 0; j2 < len; j2++) {
            if (img2[i2][j2] === 1) {
              count[i - i2 + len][j - j2 + len] += 1
            }
          }
        }
      }
    }
  }

  let ans = 0
  for (const row of count) {
    ans = Math.max(...row, ans)
  }
  return ans
}

largestOverlap(
  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
  ],
  [
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 1]
  ]
)

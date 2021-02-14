/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  const n = row.length
  let ans = 0
  for (let i = 0; i < n; i += 2) {
    if (row[i + 1] === (row[i] ^ 1)) continue
    ans++
    for (let j = i + 2; j < n; j++) {
      if (row[j] === (row[i] ^ 1)) {
        ;[row[i + 1], row[j]] = [row[j], row[i + 1]]
        break
      }
    }
  }
  return ans
}

minSwapsCouples([0, 2, 1, 3])

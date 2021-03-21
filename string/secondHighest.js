/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const arr = Array(10).fill(0)
  for (const c of s) {
    if (c >= 0 && c <= 9) {
      arr[c] += 1
    }
  }
  const list = arr
    .map((val, index) => [val, index])
    .filter((item) => item[0] > 0)
    .sort((a, b) => b[1] - a[1])
  if (list.length < 2) return -1
  return list[1][1]
}

secondHighest('ck077')

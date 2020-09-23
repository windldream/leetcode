/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const map = new Map()
  for (const [row, col] of reservedSeats) {
    if (!map.has(row)) {
      map.set(row, [])
    }
    map.get(row).push(col)
  }
  let ans = (n - map.size) * 2
  for (const cols of map.values()) {
    ans += getCount(cols)
  }
  return ans

  function getCount(cols) {
    const valids = [
      [2, 3, 4, 5],
      [4, 5, 6, 7],
      [6, 7, 8, 9]
    ]
    let count = 0
    for (const valid of valids) {
      if (valid.every((col) => !cols.includes(col))) {
        count++
      }
    }
    let maxCount = 2
    if ([2, 3, 4, 5, 6, 7, 8, 9].some((col) => cols.includes(col))) {
      maxCount = 1
    }
    return Math.min(count, maxCount)
  }
}

maxNumberOfFamilies(2, [
  [2, 1],
  [1, 8],
  [2, 6]
])

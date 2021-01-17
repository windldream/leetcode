/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const lastRemaining = function (n, m) {
  const arr = Array(n)
    .fill(0)
    .map((val, index) => index)
  let start = 0
  while (arr.length > 1) {
    start = (start + m - 1) % arr.length
    arr.splice(start, 1)
  }
  return arr[0]
}

lastRemaining(5, 3)

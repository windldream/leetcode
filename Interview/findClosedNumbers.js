/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  if (num === 2 ** 31) return [-1, -1]
  let max = -1
  let min = -1
  let n = num
  const cnt = countBit(num)
  while (n < 2 ** 31) {
    n++
    if (countBit(n) === cnt) {
      max = n
      break
    }
  }

  n = num
  while (n > 1) {
    n--
    if (countBit(n) === cnt) {
      min = n
      break
    }
  }
  return [max, min]

  function countBit(num) {
    let ans = 0
    while (num) {
      num = num & (num - 1)
      ans++
    }
    return ans
  }
}

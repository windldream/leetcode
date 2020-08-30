/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  let res = [-1, -1]
  const count = getCount(num)
  let n = num
  while (n < 2147483647) {
    n++
    if (count === getCount(n)) {
      res[0] = n
      break
    }
  }
  while (num > 0) {
    num--
    if (count === getCount(num)) {
      res[1] = num
      break
    }
  }
  return res

  function getCount(n) {
    let ans = 0
    while (n !== 0) {
      ans += n & 1
      n >>>= 1
    }
    return ans
  }
}

findClosedNumbers(2)

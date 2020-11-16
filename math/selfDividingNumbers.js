/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const ans = []
  for (let num = left; num <= right; num++) {
    if (check(num)) ans.push(num)
  }
  return ans

  function check(num) {
    const str = num + ''
    for (const n of str) {
      if (n === '0' || num % n) return false
    }
    return true
  }
}

selfDividingNumbers(1, 22)

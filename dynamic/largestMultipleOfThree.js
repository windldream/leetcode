/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function (digits) {
  const countMap = Array(10).fill(0)
  let sum = 0
  for (const num of digits) {
    countMap[num] += 1
    sum += num
  }

  if (sum % 3 === 1) {
    if (!del(1)) {
      del(2)
      del(2)
    }
  }

  if (sum % 3 === 2) {
    if (!del(2)) {
      del(1)
      del(1)
    }
  }

  let ans = ''
  for (let i = 9; i >= 0; i--) {
    while (countMap[i]) {
      ans += i
      countMap[i] -= 1
    }
  }
  if (ans.length && ans[0] === '0') return '0'
  return ans

  function del(num) {
    for (let i = num; i <= 9; i += 3) {
      if (countMap[i]) {
        countMap[i] -= 1
        return true
      }
    }
    return false
  }
}

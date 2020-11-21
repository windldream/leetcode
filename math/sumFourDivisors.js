/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  let sum = 0
  for (const num of nums) {
    const stack = getPrime(num)
    if (stack.size === 4) {
      for (const n of stack) {
        sum += n
      }
    }
  }
  return sum

  function getPrime(num) {
    const ans = new Set()
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (ans.size > 4) return ans
      if (num % i === 0) {
        ans.add(i)
        ans.add(num / i)
      }
    }
    return ans
  }
}

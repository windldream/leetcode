/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  const nums = []

  while (num > 0) {
    const mod = num % 10
    num = ~~(num / 10)
    nums.push(mod)
  }

  nums.sort((a, b) => b - a)

  let a = 0
  let b = 0

  while (nums.length > 0) {
    a = a * 10 + (nums.pop() || 0)
    b = b * 10 + (nums.pop() || 0)
  }

  return a + b
}

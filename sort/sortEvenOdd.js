/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const odd = nums.filter((val, idx) => idx & 1).sort((a, b) => a - b)
  const even = nums.filter((val, idx) => !(idx & 1)).sort((a, b) => b - a)
  const ans = []

  while (odd.length || even.length) {
    if (even.length) ans.push(even.pop())
    if (odd.length) ans.push(odd.pop())
  }

  return ans
}

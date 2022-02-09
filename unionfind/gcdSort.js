/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function (nums) {
  const max = Math.max(...nums)
  const unionFind = Array(max)
    .fill(0)
    .map((val, idx) => idx)

  for (const num of nums) {
    let n = num

    for (let i = 2; i <= Math.trunc(num / i); i++) {
      let flag = false

      while (n % i === 0) {
        n = n / i
        flag = true
      }

      if (flag) union(num, i)
    }

    if (n > 1) union(num, n)
  }

  const sortNums = nums.slice().sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === sortNums[i]) continue
    if (find(nums[i]) !== find(sortNums[i])) return false
  }

  return true

  function find(x) {
    const y = unionFind[x]
    return x === y ? x : (unionFind[x] = find(y))
  }

  function union(x, y) {
    const u = find(x)
    const v = find(y)
    if (u !== v) unionFind[v] = x
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  const mod = 10 ** 9 + 7
  const len = nums.length
  const com = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))
  com[1][0] = 1
  com[1][1] = 1
  for (let i = 2; i <= len; i++) {
    com[i][0] = 1
    for (let j = 1; j <= i; j++) {
      com[i][j] = (com[i - 1][j] + com[i - 1][j - 1]) % mod
    }
  }

  let mul = BigInt(1)
  dfs(nums, 0, nums.length - 1)
  return (mul - BigInt(1) + BigInt(mod)) % BigInt(mod)

  function dfs(nums, l, r) {
    if (r - l <= 1) return
    const less = []
    const greater = []
    for (let i = l + 1; i <= r; i++) {
      if (nums[i] < nums[l]) {
        less.push(nums[i])
      } else {
        greater.push(nums[i])
      }
    }

    mul *= BigInt(com[greater.length + less.length][greater.length])
    if (mul >= BigInt(mod)) mul = mul % BigInt(mod)
    dfs(less, 0, less.length - 1)
    dfs(greater, 0, greater.length - 1)
  }
}

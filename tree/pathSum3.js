/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
  if (nums.length === 0) return 0
  const nodes = Array(16).fill(null)
  for (const num of nums) {
    const level = Math.trunc(num / 100)
    const pos = Math.trunc(num / 10) % 10
    const val = num % 10
    const index = 2 ** (level - 1) + pos - 1
    nodes[index] = val
  }

  let curVal = 0
  let ans = 0
  backtrack(nodes, 1)
  return ans

  function backtrack(nodes, index) {
    if (nodes[index] == null) return
    curVal += nodes[index]
    if (nodes[index * 2] == null && nodes[index * 2 + 1] == null) {
      ans += curVal
    }
    if (nodes[index * 2] != null) {
      backtrack(nodes, index * 2)
    }
    if (nodes[index * 2 + 1] != null) {
      backtrack(nodes, index * 2 + 1)
    }
    curVal -= nodes[index]
  }
}

pathSum([111, 217, 221, 315, 415])

/**
 * @param {number[]} parents
 * @param {number[]} nums
 * @return {number[]}
 */
var smallestMissingValueSubtree = function (parents, nums) {
  const n = parents.length
  const ans = Array(n).fill(1)
  let index = 0

  for (; index < n; index++) {
    if (nums[index] === 1) break
  }

  if (index === n) return ans

  const map = new Map()

  for (let i = 0; i < n; i++) {
    if (!map.has(parents[i])) map.set(parents[i], [])
    map.get(parents[i]).push(i)
  }

  const visited = new Set()
  dfs(index, -1, visited)

  let min = 1

  while (visited.has(min)) {
    min++
  }

  ans[index] = min

  while (parents[index] !== -1) {
    dfs(parents[index], index, visited)
    index = parents[index]

    while (visited.has(min)) {
      min++
    }

    ans[index] = min
  }

  return ans

  function dfs(root, from, visited) {
    if (visited.has(nums[root])) return
    visited.add(nums[root])

    if (map.has(root)) {
      for (const child of map.get(root)) {
        if (child !== from) {
          dfs(child, from, visited)
        }
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0

  const unionFind = Object.create(null)
  const count = Object.create(null)

  for (const num of nums) {
    unionFind[num] = num
    count[num] = 1
  }

  let ans = 1

  for (const num of nums) {
    if (unionFind[num + 1] !== undefined) {
      ans = Math.max(ans, union(num, num + 1))
    }
  }

  return ans

  function union(x, y) {
    const u = find(x)
    const v = find(y)
    if (u === v) return count[u]

    count[u] += count[v]
    unionFind[v] = u
    return count[u]
  }

  function find(x) {
    const y = unionFind[x]
    return x === y ? x : (unionFind[x] = find(y))
  }
}

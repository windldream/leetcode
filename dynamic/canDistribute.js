/**
 * @param {number[]} nums
 * @param {number[]} quantity
 * @return {boolean}
 */
const canDistribute = function (nums, quantity) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) map.set(num, 0)
    map.set(num, map.get(num) + 1)
  }
  return backtracking(map, 0, quantity)

  function backtracking(map, n, quantity) {
    if (n === quantity.length) return true
    const set = new Set()
    for (const [num, count] of map) {
      if (count >= quantity[n]) {
        if (set.has(count)) continue
        set.add(count)
        map.set(num, count - quantity[n])
        if (backtracking(map, n + 1, quantity)) return true
        map.set(num, count)
      }
    }
    return false
  }
}

canDistribute([1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 4])

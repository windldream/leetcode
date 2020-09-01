/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let l = 0
  let r = 0
  let ans = 0
  let count = new Map()
  while (r < tree.length) {
    if (!count.has(tree[r])) {
      count.set(tree[r], 0)
    }
    count.set(tree[r], count.get(tree[r]) + 1)
    while (count.size > 2) {
      count.set(tree[l], count.get(tree[l]) - 1)
      if (count.get(tree[l]) === 0) {
        count.delete(tree[l])
      }
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans
}

totalFruit([0, 1, 2, 2])

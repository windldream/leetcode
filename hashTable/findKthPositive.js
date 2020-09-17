/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const set = new Set()
  let i = 1
  while (true) {
    if (arr.includes(i)) {
      i++
      continue
    }
    set.add(i)
    if (set.size === k) return i
    i++
  }
}

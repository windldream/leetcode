/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const countMap = new Map()
  for (const num of arr) {
    if (!countMap.has(num)) {
      countMap.set(num, 0)
    }
    countMap.set(num, countMap.get(num) + 1)
  }

  const keys = [...countMap.keys()].sort((a, b) => countMap.get(a) - countMap.get(b))
  for (const key of keys) {
    if (k >= countMap.get(key)) {
      k -= countMap.get(key)
      countMap.delete(key)
    } else {
      return countMap.size
    }
  }
  return 0
}

findLeastNumOfUniqueInts([2, 4, 1, 8, 3, 5, 1, 3], 3)

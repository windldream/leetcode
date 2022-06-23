/**
 * @param {number[]} arr
 */
var MajorityChecker = function (arr) {
  const map = new Map()

  arr.forEach((val, idx) => {
    if (!map.has(val)) map.set(val, [])
    map.get(val).push(idx)
  })

  this.map = map
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function (left, right, threshold) {
  for (const [key, idxs] of this.map) {
    if (idxs.length < threshold) continue

    const l = searchLeft(idxs, left)
    const r = searchRight(idxs, right)

    if (r - l + 1 >= threshold) return key
  }

  return -1

  // 查找大于等于left的第一个索引
  function searchLeft(list, left) {
    const n = list.length
    let l = 0
    let r = n - 1
    let ans = n

    while (l <= r) {
      const mid = (l + r) >> 1

      if (list[mid] >= left) {
        ans = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    return ans
  }

  // 查找小于等于right的第一个索引
  function searchRight(list, right) {
    const n = list.length
    let l = 0
    let r = n - 1
    let ans = -1

    while (l <= r) {
      const mid = (l + r) >> 1

      if (list[mid] <= right) {
        ans = mid
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    return ans
  }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */

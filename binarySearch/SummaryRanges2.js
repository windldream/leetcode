var SummaryRanges = function () {
  this.list = []
}

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  const list = this.list
  const n = list.length

  if (n === 0) {
    list.push([val, val])
    return
  }

  let l = 0
  let r = n - 1

  while (l < r) {
    const mid = (l + r + 1) >> 1

    if (list[mid][0] <= val) l = mid
    else r = mid - 1
  }

  const cur = list[r]

  if (cur[0] > val) {
    if (val + 1 === cur[0]) cur[0] = val
    else list.splice(r, 0, [val, val])
    return
  }

  if (cur[0] <= val && val <= cur[1]) {
  } else if (r === n - 1) {
    if (cur[1] + 1 === val) cur[1] = val
    else list.push([val, val])
  } else {
    const next = list[r + 1]

    if (cur[1] + 1 === val && val === next[0] - 1) {
      cur[1] = next[1]
      list.splice(r + 1, 1)
    } else if (cur[1] + 1 === val) {
      cur[1] = val
    } else if (next[0] - 1 === val) {
      next[0] = val
    } else {
      list.splice(r + 1, 0, [val, val])
    }
  }
}

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  return this.list
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

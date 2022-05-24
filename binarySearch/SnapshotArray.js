/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.sid = 0
  this.snapArr = Array(length)
    .fill(0)
    .map(() => ({ [this.sid]: 0 }))
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.snapArr[index][this.sid] = val
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  return this.sid++
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  const map = this.snapArr[index]

  if (typeof map[snap_id] !== 'undefined') return map[snap_id]

  const snapIds = Object.keys(map)
  snapIds.sort((a, b) => a - b)

  let l = 0
  let r = snapIds.length - 1
  let ans = 0

  while (l <= r) {
    const mid = (l + r) >> 1

    if (snapIds[mid] < snap_id) {
      ans = snapIds[mid]
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return map[ans]
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

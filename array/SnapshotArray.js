/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
  this.arr = Array(length)
    .fill(0)
    .map(() => {
      return { 0: 0 }
    })
  this.sid = 0
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
  this.arr[index][this.sid] = val
}

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
  this.sid += 1
  return this.sid - 1
}

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
  const obj = this.arr[index]
  if (snap_id in obj) {
    return obj[snap_id]
  }
  const keys = Object.keys(obj)
  keys.sort((a, b) => a - b)
  let l = 0
  let r = keys.length - 1
  while (l <= r) {
    const mid = (l + r) >> 1
    if (keys[mid] > snap_id) {
      r = mid - 1
    } else if (keys[mid] === snap_id) {
      r = mid - 1
    } else if (keys[mid] < snap_id) {
      l = mid + 1
    }
  }
  return obj[keys[l]]
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

/**
 * @param {number[]} arr
 */
var MajorityChecker = function (arr) {
  this.idx = {}
  for (let i = 0; i < arr.length; i++) {
    if (!this.idx[arr[i]]) {
      this.idx[arr[i]] = []
    }
    this.idx[arr[i]].push(i)
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function (left, right, threshold) {
  for (const key in this.idx) {
    const indexs = this.idx[key]
    if (indexs.length < threshold) return -1
    const l = indexs.filter((i) => i < left).length
    const r = indexs.filter((i) => i <= right).length
    if (r - l >= threshold) return key
  }
  return -1
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */

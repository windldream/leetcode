var RandomizedSet = function () {
  this.nums = Array(200010).fill(0)
  this.map = new Map()
  this.idx = -1
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false

  this.nums[++this.idx] = val
  this.map.set(val, this.idx)

  return true
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false

  const index = this.map.get(val)
  this.map.delete(val)

  // 如果删除的不是最后一个元素
  if (index !== this.idx) {
    this.map.set(this.nums[this.idx], index)
  }
  this.nums[index] = this.nums[this.idx--]

  return true
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * (this.idx + 1))

  return this.nums[randomIdx]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

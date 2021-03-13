/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.bs = Array(40000).fill(0)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const bucketIdx = ~~(key / 32)
  const bitIdx = key % 32
  this.set(bucketIdx, bitIdx, true)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const bucketIdx = ~~(key / 32)
  const bitIdx = key % 32
  this.set(bucketIdx, bitIdx, false)
}

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const bucketIdx = ~~(key / 32)
  const bitIdx = key % 32
  return this.get(bucketIdx, bitIdx)
}

MyHashSet.prototype.set = function (bucket, loc, val) {
  if (val) {
    const u = this.bs[bucket] | (1 << loc)
    this.bs[bucket] = u
  } else {
    const u = this.bs[bucket] & ~(1 << loc)
    this.bs[bucket] = u
  }
}

MyHashSet.prototype.get = function (bucket, loc) {
  // 判断 this.bs[bucket]的第loc位是否是 1
  const u = (this.bs[bucket] >> loc) & 1
  return u === 1
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

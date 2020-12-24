/**
 * @param {number[]} nums
 */
const FirstUnique = function(nums) {
  const countMap = new Map()
  for (const num of nums) {
    if (!countMap.has(num)) {
      countMap.set(num, 0)
    }
    countMap.set(num, countMap.get(num) + 1)
  }
  const queue = []
  for (const num of nums) {
    if (countMap.get(num) > 1) continue
    queue.push(num)
  }
  this.queue = queue
  this.countMap = countMap
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  if (this.queue.length === 0) return -1
  return this.queue[0]
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.countMap.has(value)) {
    const index = this.queue.indexOf(value)
    this.queue.splice(index,1)
    this.countMap.set(value, this.countMap.get(value) + 1)
  } else {
    this.queue.push(value)
    this.countMap.set(value, 1)
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
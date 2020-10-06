/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  const map = new Map()
  nums.forEach((num, index) => {
    if (!map.has(num)) {
      map.set(num, [])
    }
    map.get(num).push(index)
  })
  this.map = map
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const list = this.map.get(target)
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

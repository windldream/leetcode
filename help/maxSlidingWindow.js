/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length < 2) return nums

  const queue = []
  const res = []
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    queue.push(i)
    // 移除窗口之外的元素（窗口左边）
    if (queue[0] <= i - k) {
      queue.shift()
    }
    if (i - k + 1 >= 0) {
      res[i - k + 1] = nums[queue[0]]
    }
  }
  return res
}

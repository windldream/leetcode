/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0
  let fast = 0

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    // 快指针和慢指针相遇
    // 假设慢指针走了n步，此时快指针走了2n步，假设环的周长是c
    // 那么n % c === 0
    // 此时慢指针在环里面走了 n - m
    // 如果慢指针再走m步就到了环的入口
    if (slow === fast) {
      fast = 0

      while (fast !== slow) {
        slow = nums[slow]
        fast = nums[fast]
      }

      return fast
    }
  }
}

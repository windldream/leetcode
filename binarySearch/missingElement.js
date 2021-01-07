/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const missingElement = function (nums, k) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    const loss = nums[i + 1] - nums[i] - 1
    if (loss >= k) {
      return nums[i] + k
    } else {
      k -= loss
    }
  }

  return nums[len - 1] + k
}

missingElement([89248, 1001459, 1923894, 2312461, 4064902, 4502493, 8228616, 8262691, 8654597, 9635457], 10)

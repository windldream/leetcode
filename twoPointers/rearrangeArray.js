/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const positives = nums.filter((num) => num > 0)
  const negatives = nums.filter((num) => num < 0)
  const ans = []

  for (let i = 0; i < nums.length >> 1; i++) {
    ans.push(positives[i], negatives[i])
  }

  return ans
}

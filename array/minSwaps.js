/**
 * @param {number[]} data
 * @return {number}
 */
const minSwaps = function(data) {
  let count = 0
  for (const num of data) {
    count += num
  }

  let l = 0
  let r = 0
  const len = data.length
  let ans = len
  let sum = 0
  while (r < len) {
    sum += data[r]
    if (r - l + 1 > count) {
      sum -= data[l++]
    }
    if (r - l + 1 === count) ans = Math.min(ans, count - sum)
    r++
  }

  return ans
};
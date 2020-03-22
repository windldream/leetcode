/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const hashMap = new Map();
  let max = 0;
  for (const num of nums) {
    if (!hashMap.has(num)) {
      const left = hashMap.get(num - 1) || 0;
      const rifgt = hashMap.get(num + 1) || 0;
      const curLen = left + rifgt + 1;
      if (curLen > max) {
        max = curLen;
      }
      hashMap.set(num, curLen);
      hashMap.set(num - left, curLen);
      hashMap.set(num + rifgt, curLen);
    }
  }
  return max;
};

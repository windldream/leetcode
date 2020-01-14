/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
  if (nums.length < 3 * k) {
    return [];
  }

  const len = nums.length,
    arrIndex = [],
    sum = [];
  let maxSum = -Infinity;

  sum[0] = 0;
  for (let i = 1; i <= len; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }

  for (let mid = k; mid <= len - 2 * k; mid++) {
    let maxFirstSum = -Infinity,
      first = 0,
      maxThreeSum = -Infinity,
      three = 0;

    for (let index = 0; index <= mid - k; index++) {
      if (maxFirstSum < sum[index + k] - sum[index]) {
        maxFirstSum = sum[index + k] - sum[index];
        first = index;
      }
    }

    for (let index = mid + k; index <= len - k; index++) {
      if (maxThreeSum < sum[index + k] - sum[index]) {
        maxThreeSum = sum[index + k] - sum[index];
        three = index;
      }
    }

    if (maxFirstSum + maxThreeSum + sum[mid + k] - sum[mid] > maxSum) {
      arrIndex[0] = first;
      arrIndex[1] = mid;
      arrIndex[2] = three;
      maxSum = maxFirstSum + maxThreeSum + sum[mid + k] - sum[mid];
    }
  }

  return arrIndex;
};

console.log(maxSumOfThreeSubarrays([1, 2, 1, 2, 6, 7, 5, 1], 2));

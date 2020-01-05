/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let res = [],
    len1 = nums1.length,
    len2 = nums2.length;
  if (len1 + len2 < k) {
    return [];
  }

  if (len1 > len2) {
    return maxNumber(nums2, nums1, k);
  }

  // 从第一个数组中抽取i个数，第二个数组抽取k - i个数
  let len = Math.min(len1, k);
  for (let i = 0; i <= len; i++) {
    // 剪枝
    if (k - i > len2) {
      continue;
    }
    let maxNum1 = maxNum(nums1, i);
    let maxNum2 = maxNum(nums2, k - i);
    res = compare(mergeNum(maxNum1, maxNum2), res) ? mergeNum(maxNum1, maxNum2) : res;
  }

  return res;

  function compare(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] > nums2[i]) {
        return true;
      } else if (nums1[i] < nums2[i]) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  }

  // 合并两个数组返回的数组组成的数最大
  function mergeNum(nums1, nums2) {
    let res = [],
      k = 0,
      l = 0,
      r = 0;

    while (l < nums1.length && r < nums2.length) {
      if (nums1[l] > nums2[r]) {
        res[k++] = nums1[l++];
      } else if (nums1[l] < nums2[r]) {
        res[k++] = nums2[r++];
      } else {
        if (getNextStep(nums1, nums2, l, r)) {
          res[k++] = nums1[l++];
        } else {
          res[k++] = nums2[r++];
        }
      }
    }

    while (l < nums1.length) {
      res[k++] = nums1[l++];
    }

    while (r < nums2.length) {
      res[k++] = nums2[r++];
    }

    return res;
  }

  function getNextStep(nums1, nums2, l, r) {
    if (l >= nums1.length && r >= nums2.length) {
      return true;
    }

    if (r >= nums2.length) {
      return true;
    }

    if (l >= nums1.length) {
      return false;
    }

    if (nums1[l] === nums2[r]) {
      return getNextStep(nums1, nums2, l + 1, r + 1);
    } else if (nums1[l] > nums2[r]) {
      return true;
    } else {
      return false;
    }
  }

  // 从nums中抽取k个数组成的数最大
  function maxNum(nums, k) {
    let res = [],
      l = 0,
      r = nums.length - k;
    for (let i = 0; i < k; i++) {
      let max = getMaxNum(nums, l, r);
      res[i] = max[0];
      l = max[1] + 1;
      r++;
    }
    return res;
  }

  // 获取数组从l到r位置的最大值及其索引
  function getMaxNum(nums, l, r) {
    let res = [],
      max = -1;

    while (l <= r) {
      if (nums[l] > max) {
        max = nums[l];
        res[0] = max;
        res[1] = l;
        if (max === 9) {
          return res;
        }
      }
      l++;
    }
    return res;
  }
}

console.log(maxNumber([8, 9], [3, 9], 3))
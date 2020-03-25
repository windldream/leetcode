/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  return nums1.filter((val) => {
    let index = nums2.indexOf(val);
    if (index > -1) {
      nums2.splice(index, 1);
      return true;
    } else {
      return false;
    }
  });
};
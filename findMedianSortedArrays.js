/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = [], len;

    while (nums1.length > 0 && nums2.length > 0) {
        if (nums1[0] < nums2[0]) {
            result.push(nums1.shift());
        } else {
            result.push(nums2.shift());
        }
    }

    result = result.concat(nums1).concat(nums2);
    len = result.length;

    if (len === 1) {
        return result[0];
    } else if (len % 2 === 0) {
        return (result[len / 2] + result[len / 2 - 1]) / 2;
    } else {
        return result[Math.floor(len / 2)];
    }
};

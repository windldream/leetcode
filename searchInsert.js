/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length, low = 0, high = len - 1, mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return low;
};

console.log(searchInsert([1, 3, 5, 6], 9))
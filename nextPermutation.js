/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 1, j = nums.length - 1;

    while (i > 0 && nums[i - 1] >= nums[i]) {
        i--;
    }

    if (i === 0) {
        nums.reverse();
    } else {
        while (j >= i && nums[i - 1] >= nums[j]) {
            j--;
        }

        [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
        reverse(i, nums.length - 1, nums);
    }

    function reverse(start, end, arr) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr;
    }
};

nextPermutation([1, 3, 2])
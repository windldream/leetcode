/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length, i = 0, sum = Number.MIN_SAFE_INTEGER , res = Number.MIN_SAFE_INTEGER ;

    if (len < 2) {
        return nums[0]
    }

    for (i = 0; i < len; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        res = Math.max(sum, res);
    }

    return res;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治法
var maxSubArray = function(nums) {
    let len = nums.length, i = 0, sum = Number.MIN_SAFE_INTEGER , res = Number.MIN_SAFE_INTEGER ;

    if (len < 2) {
        return nums[0]
    }

    function divide(left, right) {  
        
    }

    return res;
};

// 动态规划
// var maxSubArray = function(nums) {
//     let len = nums.length, i = 0, sum = Number.MIN_SAFE_INTEGER , res = Number.MIN_SAFE_INTEGER ;

//     if (len < 2) {
//         return nums[0]
//     }

//     for (i = 0; i < len; i++) {
//         // 上一次结果sum > 0对于整体结果都是增益的
//         if (sum > 0) {
//             sum += nums[i];
//         } else {
//             sum = nums[i];
//         }
//         res = Math.max(sum, res);
//     }

//     return res;
// };

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
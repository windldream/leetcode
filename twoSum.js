/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let len = nums.length, i = 0, j;

//     for (; i < len; i += 1) {
//         for (j = i + 1; j < len; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// var twoSum = function(nums, target) {
//     let len = nums.length, i = 0, num, index;

//     for (; i < len; i += 1) {
//         num = target - nums[i];
//         index = nums.indexOf(num);
//         if ( index > -1 && index !== i) {
//             return [i, index];
//         }
//     }
// };
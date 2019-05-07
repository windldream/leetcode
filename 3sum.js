/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time Limit Exceeded
// var threeSum = function(nums) {
//     let i, j, k, len = nums.length, resultArr = [], map = {};

//     for (i = 0; i < len; i++) {
//         for (j = i + 1; j < len; j++) {
//             for (k = j + 1; k < len; k++) {
//                 if (nums[i] + nums[j] + nums[k] === 0) {
//                     resultArr.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }

//     for (i = 0; i < resultArr.length; i++) {
//         if (!map[resultArr[i].sort().join(',')]) {
//             map[resultArr[i].sort().join(',')] = true
//         } else {
//             resultArr.splice(i, 1);
//             i--
//         }
//     }

//     return resultArr;
// };

var threeSum = function(nums) {
    let i = 0, j, k, len = nums.length, resultArr = []
    nums = nums.sort((a, b) => a - b); 

    for (; i < len; i++) {
        if (i == 0 || nums[i] > nums[i - 1]) {
            j = i + 1;
            k = len - 1;
            while (j < k) {
                if (nums[j] + nums[k] === -nums[i]) {
                    resultArr.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] == nums[j - 1]) {
                        j++
                    }
                    while (j < k && nums[k] == nums[k + 1]) {
                        k--
                    }
                } else if (nums[j] + nums[k] > -nums[i]) {
                    k--;
                } else if (nums[j] + nums[k] < -nums[i]) {
                    j++
                }
            }
        }
    }

    return resultArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

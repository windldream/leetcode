/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.sort((a, b) => a - b).length, i, j, l, r, sum, result = [];

    for (i = 0; i < len; i++) {
        if (i === 0 || nums[i] > nums[i - 1]) {
            for (j = i + 1; j < len; j++) {
                if (j === i + 1 || nums[j] > nums[j - 1]) {
                    l = j + 1;
                    r = len - 1;
                    while (l < r) {
                        sum = nums[i] + nums[j] + nums[l] + nums[r] - target;
                        if (sum === 0) {
                            result.push([nums[i], nums[j], nums[l], nums[r]]);
                            l++;
                            r--;
                            while (l < r && nums[r] === nums[r + 1]) {
                                r--;
                            }
                            while (l < r && nums[l] === nums[l - 1]) {
                                l--;
                            }
                        } else if (sum > 0) {
                            r--;
                        } else {
                            l++;
                        }
                    }
                }    
            }
        }  
    }
    
    return result;
};

console.log(fourSum([-1, 0, -5 , -2, -2, -4, 0, 1, -2], -9))

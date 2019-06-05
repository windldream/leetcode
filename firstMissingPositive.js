/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度O(nlogn)
// var firstMissingPositive = function(nums) {
//     let len = nums.length, minPositive = 1, i;
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < len; i++) {
//         if (nums.indexOf(minPositive) > -1) {
//             minPositive++;
//         } else {
//             return minPositive;
//         }
//     }

//     return minPositive;
// };

var firstMissingPositive = function(nums) {
    let len = nums.length, contains = 0, i;
    
    for (i = 0; i < len; i++) {
        if (nums[i] === 1) {
            contains++;
            break;
        }
    }

    if (contains === 0) {
        return 1;
    }

    if (len === 1) {
        return 2;
    }

    for (i = 0; i < len; i++) {
        // 最小正整数只会是小于等于len + 1
        // len + 1 的情况另外考虑
        if (nums[i] <= 0 || nums[i] > len) {
            nums[i] = 1;
        }
    } 

    for (i = 0; i < len; i++) {
        let a = Math.abs(nums[i]);
        if (a === len) {
            nums[0] = -Math.abs(nums[0]);
        } else {
            nums[a] = -Math.abs(nums[a]);
        }
    }

    for (i = 1; i < len; i++) {
        if (nums[i] > 0) {
            return i;
        }
    }

    if (nums[0] > 0) {
        return len;
    }

    return len + 1;
};

console.log(firstMissingPositive([3, 4, -1, -2, 1, 5, 16, 0, 2, 0]))
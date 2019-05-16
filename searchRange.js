/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let len = nums.length, low = 0, high = len - 1, mid, first, i, result = [], flag = true;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            i = first = mid;
            break;
        }
    }

    if (first === undefined) {
        return [-1, -1];
    }

    while (i >= 0) {
        if (nums[i] === target) {
            i--;
            flag = false
        } else {
            break;
        }
    }

    result.push(flag ? i : i + 1);
    flag = true;

    i = first;

    while (i <= high) {
        if (nums[i] === target) {
            i++;
            flag = false
        } else {
            break;
        }
        
    }

    result.push(flag ? i : i - 1);

    return result;
};

searchRange([1], 1);
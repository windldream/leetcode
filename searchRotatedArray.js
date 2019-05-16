/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length, mid, minIndex, low = 0, high = len - 1;

    if (len === 0) {
        return -1;
    }

    if (len === 1) {
        return nums[0] === target ? 0 : -1;
    }

    if (nums[len - 1] > nums[0]) {
        minIndex = 0;
    } else {
        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            if (nums[mid - 1] != null && nums[mid + 1] != null) {
                if (nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1]) {
                    if (nums[mid] > nums[high]) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                } else if (nums[mid - 1] > nums[mid] && nums[mid] < nums[mid + 1]) {
                    minIndex = mid;
                    break;
                } else if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
                    minIndex = mid + 1;
                    break;
                }
            } else if (nums[mid - 1] != null) {
                if (nums[mid] > nums[mid - 1]) {
                    minIndex = mid - 1;
                } else {
                    minIndex = mid;
                }
                break;
            } else if (nums[mid + 1] != null) {
                if (nums[mid] < nums[mid + 1]) {
                    minIndex = mid;
                } else {
                    minIndex = mid + 1;
                }
                break;
            } else {
                minIndex = mid;
                break;
            }
        }
    }

    if (nums[minIndex - 1] != null ) {
        if (target > nums[minIndex - 1] || target < nums[minIndex]) {
            return -1;
        } else if (target <= nums[minIndex - 1] && target > nums[len - 1]) {
            low = 0;
            high = minIndex - 1;
            while (low <= high) {
                mid = Math.floor((low + high) / 2);
                if (nums[mid] > target) {
                    high = mid - 1;
                } else if (nums[mid] < target) {
                    low = mid + 1;
                } else {
                    return mid;
                }
            }
        } else if (target >= nums[minIndex] && target < nums[0]) {
            low = minIndex;
            high = len - 1;
            while (low <= high) {
                mid = Math.floor((low + high) / 2);
                if (nums[mid] > target) {
                    high = mid - 1;
                } else if (nums[mid] < target) {
                    low = mid + 1;
                } else {
                    return mid;
                }
            }
        } else if (target === nums[0] || target === nums[len - 1]) {
            if (target === nums[0]) {
                return 0;
            } else {
                return len - 1;
            }
        }
    } else {
        low = 0;
        high = len - 1;
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
    }

    return -1;
};

console.log(search([1, 3], -1))
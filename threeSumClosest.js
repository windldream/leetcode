/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let i, j, k, len = nums.length, s, max = Number.MAX_SAFE_INTEGER, sum;
    nums = nums.sort((a, b) => a - b);

    for (i = 0; i < len; i++) {
        j = i + 1;
        k = len - 1;
        while (j < k) {
            s = nums[i] + nums[j] + nums[k] - target;
            if (s === 0) {
                return target;
            } else if (s < 0) {
                if (Math.abs(s) < max) {
                    max = Math.abs(s);
                    sum = s + target;
                }
                j++;
            } else {
                if (Math.abs(s) < max) {
                    max = Math.abs(s);
                    sum = s + target;
                }
                k--;
            }
        }
    }

    return sum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))
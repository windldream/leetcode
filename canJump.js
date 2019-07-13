/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length, i, pre_max_index = nums[0];

    if (len < 2) {
        return true;
    }

    for (i = 0; i < len; i++) {
        if (pre_max_index >= i && pre_max_index < nums[i] + i) {
            pre_max_index = nums[i] + i;
        }
    }

    return pre_max_index >= len - 1;
};

console.log(canJump([3, 2, 1, 0, 4]))

// 找到当前所能到达的最远位置
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length, i, cur_max_index = nums[0], pre_max_index = nums[0], res = 1;
    
    if (len < 2) {
        return 0;
    }

    for (i = 0; i < len; i++) {
        // 无法到达当前位置
        if (cur_max_index < i) {
            cur_max_index = pre_max_index;
            res += 1;
        }
        // 无法到达更远的位置
        if (pre_max_index < nums[i] + i) {
            pre_max_index = nums[i] + i;
        }
    }

    return res;
};

console.log(jump([1, 1, 2, 1, 1]))
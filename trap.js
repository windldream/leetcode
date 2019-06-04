/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length, sum = 0;

    for (let i = 1; i < len - 1; i++) {
        let max_left = 0, max_right = 0;

        for (j = i; j >= 0; j--) {
            max_left = Math.max(max_left, height[j]);
        }

        for (j = i; j < len; j++) {
            max_right = Math.max(max_right, height[j]);
        }

        // 在一个位置能容下的雨水量等于它左右两边柱子最大高度的最小值减去它的高度
        sum += Math.min(max_left, max_right) - height[i];
    }

    return sum;
};

let rains = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(rains))
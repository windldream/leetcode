/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//     let len = height.length, sum = 0;

//     for (let i = 1; i < len - 1; i++) {
//         let max_left = 0, max_right = 0;

//         for (j = i; j >= 0; j--) {
//             max_left = Math.max(max_left, height[j]);
//         }

//         for (j = i; j < len; j++) {
//             max_right = Math.max(max_right, height[j]);
//         }

//         // 在一个位置能容下的雨水量等于它左右两边柱子最大高度的最小值减去它的高度
//         sum += Math.min(max_left, max_right) - height[i];
//     }

//     return sum;
// };

var trap = function(height) {  
    let len = height.length, sum = 0, max_left = [], max_right = [];

    max_left[0] = height[0];
    for (let i = 1; i < len; i++) {
        max_left[i] = Math.max(height[i], max_left[i - 1]);
    }

    max_right[len - 1] = height[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        max_right[i] = Math.max(height[i], max_right[i + 1]);
    }

    for (i = 1; i < len - 1; i++) {
        sum += Math.min(max_left[i], max_right[i]) - height[i];
    }

    return sum;
}

let rains = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(rains))
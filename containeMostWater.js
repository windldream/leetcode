/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     let len = height.length, i, j, max = 0, l, area;

//     for (i = 0; i < len - 1; i++) {
//         for (j = i + 1; j < len; j++) {
//             l = Math.min(height[i], height[j]);
//             area = l * (j - i);
//             if (max < area) {
//                 max = area 
//             }
//         }
//     }

//     return max;
// };

var maxArea = function(height) {
    let len = height.length, l = 0, r = len - 1, max = 0;

    while (l < r) {
        if (max < Math.min(height[l], height[r]) * (r - l)) {
            max = Math.min(height[l], height[r]) * (r - l);
        }

        if (height[l] < height[r]) {
            l++
        } else {
            r--
        } 
    }

    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

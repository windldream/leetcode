/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    let l = i,
      r = i;
    while (l >= 0 && heights[l] >= heights[i]) {
      l--;
    }
    while (r < heights.length && heights[r] >= heights[i]) {
      r++;
    }

    res = Math.max(heights[i] * (r - l - 1), res);
  }

  return res;
};

console.log(largestRectangleArea([1, 4, 5, 6, 6]));

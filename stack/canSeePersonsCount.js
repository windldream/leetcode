/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  const n = heights.length;
  const stack = [];
  const ans = Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < heights[i]) {
      ans[i]++;
      stack.pop();
    }

    stack.push(heights[i]);
    if (stack.length > 1) ans[i]++;
  }

  return ans;
};

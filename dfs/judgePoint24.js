/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  return dfs(nums);

  function dfs(nums) {
    if (nums.length === 1) {
      return Math.abs(nums[0] - 24) < 0.00000001;
    }

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const newNums = nums.slice(2);
        for (const num of computed(nums[0], nums[1])) {
          newNums[nums.length - 2] = num;
          if (dfs(newNums)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  function computed(a, b) {
    return [a + b, a - b, b - a, a / b, b / a, a * b];
  }
};

console.log(judgePoint24([4, 1, 8, 7]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  nums.sort((a, b) => a - b);

  while (nums.length) {
    let count = k;
    let prev = nums[0];
    count--;
    nums.splice(0, 1);
    for (let v = prev + 1; v < prev + k; v++) {
      if (count === 0) {
        break;
      }
      let index = nums.indexOf(v);
      if (index > -1) {
        nums.splice(index, 1);
        count--;
      } else {
        return false;
      }
    }
  }

  return true;
};

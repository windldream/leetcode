/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const countMap = {},
    countEndMap = {};
  for (let num of nums) {
    if (countMap[num]) {
      countMap[num] += 1;
    } else {
      countMap[num] = 1;
    }
  }

  for (let num of nums) {
    if (countMap[num] === 0) {
      continue;
    }
    countMap[num] -= 1;
    if (countEndMap[num - 1]) {
      countEndMap[num - 1] -= 1;
      countEndMap[num] = (countEndMap[num] || 0) + 1;
    } else if (countMap[num + 1] && countMap[num + 2]) {
      countMap[num + 1] -= 1;
      countMap[num + 2] -= 1;
      countEndMap[num + 2] = (countEndMap[num + 2] || 0) + 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPossible([1, 2, 3, 4, 4, 5]));

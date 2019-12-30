/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;

  if (len === 0) {
    return 0;
  }

  // 0 表示不偷 1表示偷
  let rob = 0,
    notRob = 0;
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      notRob = 0;
      rob = nums[i];
      continue;
    }
    let tempRob = rob,
      tempN = notRob;
    notRob = Math.max(tempRob, tempN);
    rob = Math.max(tempN + nums[i], tempRob)
  }

  return Math.max(rob, notRob);
};

console.log(rob([1, 2, 3, 1]))
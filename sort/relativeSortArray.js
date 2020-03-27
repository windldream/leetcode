/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const countMap = {};
  for (let num of arr1) {
    if (!countMap[num]) {
      countMap[num] = 0;
    }
    countMap[num] += 1;
  }

  const res = [];
  for (let num of arr2) {
    res.push(...Array(countMap[num]).fill(num));
    countMap[num] = 0;
  }

  const temp = [];
  for (let num of arr1) {
    if (countMap[num]) {
      temp.push(...Array(countMap[num]).fill(num));
      countMap[num] = 0;
    }
  }

  temp.sort((a, b) => a - b);
  return [...res, ...temp];
};

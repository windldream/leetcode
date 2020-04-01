/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function(array1, array2) {
  const sum1 = array1.reduce((prev, curr) => prev + curr, 0);
  const sum2 = array2.reduce((prev, curr) => prev + curr, 0);
  let diff = sum1 - sum2;
  if (diff % 2) {
    return [];
  }
  diff = diff / 2;
  for (const num of array1) {
    if (array2.includes(num - diff)) {
      return [num, num - diff];
    }
  }

  return [];
};

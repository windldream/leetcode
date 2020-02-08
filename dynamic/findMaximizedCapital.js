/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
var findMaximizedCapital = function(k, W, Profits, Capital) {
  if (k < 1 || Profits.length === 0) {
    return 0;
  }
  const len = Profits.length,
    arr = [];
  for (let i = 0; i < len; i++) {
    arr[i] = [Profits[i], Capital[i]];
  }
  arr.sort((a, b) => b[0] - a[0]);

  let res = W;
  label: for (let i = 0; i < k; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (W >= arr[j][1]) {
        res += arr[j][0];
        W += arr[j][0];
        arr.splice(j, 1);
        j--;
        continue label;
      }
    }
  }

  return res;
};

console.log(findMaximizedCapital(11, 11, [1, 2, 3], [11, 12, 13]));

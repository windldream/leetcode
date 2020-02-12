/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
  if (num_wanted === 0 || use_limit === 0) {
    return 0;
  }

  const len = values.length,
    arr = [];
  for (let i = 0; i < len; i++) {
    arr[i] = [values[i], labels[i]];
  }
  arr.sort((a, b) => b[0] - a[0]);

  const labelNum = [];
  let res = 0;
  for (let i = 0; i < len; i++) {
    const label = arr[i][1];
    if (labelNum[label] >= use_limit) {
      continue;
    }
    res += arr[i][0];
    num_wanted--;
    labelNum[label] = (labelNum[label] || 0) + 1;
    if (num_wanted === 0) {
      return res;
    }
  }

  return res;
};

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  const len = row.length;
  let res = 0;
  for (let i = 0; i < len; i += 2) {
    if (row[i + 1] === (row[i] ^ 1)) {
      continue;
    }
    res++;
    for (let j = i + 2; j < len; j++) {
      if (row[j] === (row[i] ^ 1)) {
        [row[j], row[i + 1]] = [row[i + 1], row[j]];
        break;
      }
    }
  }
  return res;
};

console.log(minSwapsCouples([2, 0, 5, 4, 3, 1]));

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const countMap = {};
  let maxCount = 0;
  let maxNum = 0;
  for (const num of barcodes) {
    if (!countMap[num]) {
      countMap[num] = 0;
    }
    countMap[num] += 1;
    if (countMap[num] > maxCount) {
      maxCount = countMap[num];
      maxNum = num;
    }
  }

  const res = [];
  let pos = 0;
  let len = barcodes.length;
  while (maxCount) {
    res[pos] = maxNum;
    countMap[maxNum] -= 1;
    maxCount--;
    pos += 2;
  }

  let idx = 0;
  while (pos < len) {
    if (!countMap[idx]) {
      idx++;
      continue;
    } else {
      res[pos] = idx;
      countMap[idx] -= 1;
      pos += 2;
    }
  }

  pos = 1;
  while (pos < len) {
    if (!countMap[idx]) {
      idx++;
      continue;
    } else {
      res[pos] = idx;
      countMap[idx] -= 1;
      pos += 2;
    }
  }

  return res;
};

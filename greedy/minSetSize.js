/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const numHash = {},
    numArr = [],
    len = arr.length;
  let index = 0;
  for (let i = 0; i < len; i++) {
    if (numHash[arr[i]] === undefined) {
      numHash[arr[i]] = index;
      numArr[index] = 1;
      index++;
    } else {
      let index = numHash[arr[i]];
      numArr[index] += 1;
    }
  }

  numArr.sort((a, b) => b - a);
  let res = 0,
    count = 0;
  for (let num of numArr) {
    if (count >= len / 2) {
      return res;
    } else {
      count += num;
      res++;
    }
  }
  return res;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));

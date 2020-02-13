/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const len = groupSizes.length,
    numHash = {};

  for (let i = 0; i < len; i++) {
    if (numHash[groupSizes[i]]) {
      numHash[groupSizes[i]].push(i);
    } else {
      numHash[groupSizes[i]] = [];
      numHash[groupSizes[i]].push(i);
    }
  }

  const res = [];
  for (let key in numHash) {
    let num = +key;
    let len = numHash[key].length;
    if (num === len) {
      res.push(numHash[key]);
    } else if (len > num) {
      let index = 0;
      while (len > 0) {
        res.push(numHash[key].slice(index, index + num));
        index += num;
        len -= num;
      }
    }
  }

  return res;
};

console.log(groupThePeople([2, 1, 3, 3, 3, 2]));

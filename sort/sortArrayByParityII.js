/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const oddArr = A.filter(val => val % 2);
  const evenArr = A.filter(val => val % 2 === 0);
  const res = [];
  for (let i = 0; i < oddArr.length; i++) {
    res.push(evenArr[i], oddArr[i]);
  }
  return res;
};
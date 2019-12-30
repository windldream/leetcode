/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  if (A.length === 0) {
    return [];
  }

  return A.map(item => item * item).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))
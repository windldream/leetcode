/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  let res = 0,
    x = X,
    y = Y;
  while (x < y) {
    if (y % 2 === 0) {
      y = y / 2;
      res++;
    } else {
      y = (y + 1) / 2;
      res += 2;
    }
  }
  return res + x - y;
};

console.log(brokenCalc(2, 3));

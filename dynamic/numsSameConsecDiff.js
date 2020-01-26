/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function(N, K) {
  if (N === 1) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  let res = [];
  for (let i = 1; i < 10; i++) {
    if (i < 10 - K || i - K >= 0) {
      res.push(i);
    }
  }

  for (let i = 1; i < N; i++) {
    let temp = [];
    while (res.length) {
      let num = res.pop();
      let remain = num % 10;
      if (remain < 10 - K) {
        temp.push(num * 10 + remain + K);
      }
      if (remain >= K) {
        temp.push(num * 10 + remain - K);
      }
    }
    res = temp;
  }

  return [...new Set(res)];
};

console.log(numsSameConsecDiff(3, 7));

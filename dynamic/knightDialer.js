/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
  const moves = [
      [4, 6],
      [6, 8],
      [7, 9],
      [4, 8],
      [0, 3, 9],
      [],
      [0, 1, 7],
      [2, 6],
      [1, 3],
      [2, 4]
    ],
    M = 10 ** 9 + 7,
    map = {};

  let res = 0;
  for (let i = 0; i <= 9; i++) {
    res += helper(N, i) % M;
  }
  return res % M;

  function helper(N, num) {
    if (N === 1) {
      return 1;
    }
    let key = N + '$' + num;
    if (map[key]) {
      return map[key];
    }
    let res = 0;
    for (let k of moves[num]) {
      res += helper(N - 1, k);
    }
    map[key] = res;
    return res;
  }
};

console.log(knightDialer(2));

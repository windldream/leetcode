/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(N, mines) {
  let max = 0,
    map = new Map(),
    mine = {};

  for (let i = 0; i < mines.length; i++) {
    const key = mines[i][0] + '$' + mines[i][1];
    mine[key] = true;
  }

  for (let i = 0; i < N; i++) {
    if (max > i + 1 || max > N - i) {
      continue;
    }
    for (let j = 0; j < N; j++) {
      if (max > j + 1 || max > N - j) {
        continue;
      }
      if (check(i, j)) {
        let k = 1;
        while (
          check(i - k, j) &&
          check(i + k, j) &&
          check(i, j - k) &&
          check(i, j + k)
        ) {
          k++;
        }
        max = Math.max(max, k);
      }
    }
  }

  return max;

  function check(i, j) {
    const key = i + '$' + j;
    if (map.has(key)) {
      return map.get(key);
    }
    map.set(key, i >= 0 && i < N && j >= 0 && j < N && !mine[key]);
    return map.get(key);
  }
};

console.log(orderOfLargestPlusSign(5, [[4, 2]]));

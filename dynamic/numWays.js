/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  const map = {},
    M = 10 ** 9 + 7;
  return helper(0, steps);

  function helper(pos, steps) {
    if (steps === 0) {
      return pos === 0 ? 1 : 0;
    }
    const key = pos + '$' + steps;
    if (map[key] !== undefined) {
      return map[key];
    }
    let res = helper(pos, steps - 1);
    if (pos - 1 >= 0) {
      res = (res + helper(pos - 1, steps - 1)) % M;
    }
    if (pos + 1 < arrLen) {
      res = (res + helper(pos + 1, steps - 1)) % M;
    }

    map[key] = res;
    return res;
  }
};

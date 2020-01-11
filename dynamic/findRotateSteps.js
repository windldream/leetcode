/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  const len = ring.length,
    m = key.length,
    dp = [];
  let res = Infinity;

  for (let i = 0; i < m; i++) {
    dp[i] = Array(len).fill(Infinity);
  }

  for (let i = 0; i < len; i++) {
    if (key[0] === ring[i]) {
      dp[0][i] = Math.min(i, len - i) + 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < len; j++) {
      if (key[i] !== ring[j]) {
        continue;
      }
      for (let k = 0; k < len; k++) {
        if (key[i - 1] !== ring[k]) {
          continue;
        }
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + Math.min((j - k + len) % len, (k - j + len) % len) + 1
        );
      }
    }
  }

  for (let i = 0; i < len; i++) {
    if (key[m - 1] != ring[i]) {
      continue;
    }
    res = Math.min(res, dp[m - 1][i]);
  }

  return res;
};

console.log(findRotateSteps('godding', 'gd'));

/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  const map = new Map(),
    dir = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2]
    ];

  return helper(N, K, r, c);

  function helper(N, K, r, c) {
    if (r < 0 || c < 0 || r >= N || c >= N) {
      return 0;
    }
    if (K === 0) {
      return 1;
    }

    if (map.has([K, r, c].join('@'))) {
      return map.get([K, r, c].join('@'));
    }

    let p = 0;
    for (let i = 0; i < dir.length; i++) {
      p += helper(N, K - 1, r + dir[i][0], c + dir[i][1]);
    }
    p = p / 8;

    map.set([K, r, c].join('@'), p);
    return p;
  }
};

console.log(knightProbability(3, 3, 0, 0));

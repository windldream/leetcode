/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  const map = {};
  return search(K, N);

  function search(K, N) {
    if (N === 0 || N === 1 || K === 1) {
      return N;
    }
    const key = K + '$' + N;
    if (map[key]) {
      return map[key];
    }
    let min = N;
    for (let i = 1; i <= N; i++) {
      const count = Math.max(search(K - 1, i - 1), search(K, N - i));
      min = Math.min(min, count + 1);
    }
    map[key] = min;
    return min;
  }
};

console.log(superEggDrop(3, 14));

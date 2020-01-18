/**
 * @param {number} N
 * @return {number}
 */
var soupServings = function(N) {
  if (N >= 4800) {
    return 1.0;
  }
  const map = {};
  return helper(N, N, map);
  function helper(n1, n2, map) {
    if (map[n1 + '@' + n2]) {
      return map[n1 + '@' + n2];
    }
    if (n1 <= 0 && n2 <= 0) {
      return 0.5;
    }
    if (n1 <= 0 && n2 > 0) {
      return 1;
    }
    if (n1 > 0 && n2 <= 0) {
      return 0;
    }
    map[n1 + '@' + n2] =
      (helper(n1 - 100, n2, map) +
        helper(n1 - 75, n2 - 25, map) +
        helper(n1 - 50, n2 - 50, map) +
        helper(n1 - 25, n2 - 75, map)) /
      4;
    return map[n1 + '@' + n2];
  }
};

console.log(soupServings(50));

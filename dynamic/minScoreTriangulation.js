/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
  const map = {};
  return dfs(0, A.length - 1);

  function dfs(l, r) {
    if (l + 1 === r) {
      return 0;
    }
    if (l + 2 === r) {
      return A[l] * A[l + 1] * A[r];
    }
    if (map[l + '$' + r]) {
      return map[l + '$' + r];
    }
    let res = Infinity;
    for (let k = l + 1; k < r; k++) {
      res = Math.min(res, dfs(l, k) + dfs(k, r) + A[l] * A[k] * A[r]);
    }
    map[l + '$' + r] = res;
    return res;
  }
};

console.log(minScoreTriangulation([3, 7, 4, 5]));

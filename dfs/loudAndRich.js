/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
  const len = quiet.length;
  const ans = Array(len).fill(-1);
  const graph = Array(len)
    .fill(0)
    .map(() => []);

  for (const [x, y] of richer) {
    graph[y].push(x);
  }

  for (let i = 0; i < len; i++) {
    dfs(i, ans);
  }
  return ans;

  function dfs(index, ans) {
    if (ans[index] === -1) {
      ans[index] = index;
      for (const next of graph[index]) {
        const cand = dfs(next, ans);
        if (quiet[cand] < quiet[ans[index]]) {
          ans[index] = cand;
        }
      }
    }
    return ans[index];
  }
};

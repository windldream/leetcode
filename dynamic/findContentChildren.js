/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  if (g.length === 0 || s.length === 0) {
    return 0;
  }
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const m = g.length;
  let res = 0;

  label: for (let i = 0; i < m; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] >= g[i]) {
        res++;
        s.splice(j, 1);
        continue label;
      }
    }
  }
  return res;
};

console.log(findContentChildren([1, 2], [1, 2, 3]));

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  const unionfind = {};
  for (const [u, v] of pairs) {
    union(u, v);
  }

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const p = find(i);
    if (!map[p]) {
      map[p] = [];
    }
    map[p].push({
      index: i,
      val: s[i]
    });
  }

  for (const key in map) {
    map[key].sort((a, b) => {
      return a.val > b.val ? 1 : a.val === b.val ? 0 : -1;
    });
  }

  const arr = s.split("");
  const mark = {};
  for (let i = 0; i < arr.length; i++) {
    const x = find(i);
    if (mark[x] === undefined) {
      mark[x] = 0;
    }
    arr[i] = map[x][mark[x]].val;
    mark[x] += 1;
  }
  return arr.join("");

  function find(i) {
    if (unionfind[i] === undefined) {
      return (unionfind[i] = i);
    }
    return unionfind[i] === i ? i : (unionfind[i] = find(unionfind[i]));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x < y) {
      unionfind[y] = x;
    } else {
      unionfind[x] = y;
    }
  }
};

console.log(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
    [0, 2]
  ])
);

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  const unionfind = [];
  const len = stones.length;
  for (let i = 0; i < 20000; i++) {
    unionfind[i] = i;
  }

  for (const [i, j] of stones) {
    union(i, j + 10000);
  }

  const seen = new Set();
  for (const [i, j] of stones) {
    seen.add(find(i));
  }

  return len - seen.size;

  function find(i) {
    return unionfind[i] === i ? i : (unionfind[i] = find(unionfind[i]));
  }

  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) return;
    unionfind[y] = x;
  }
};

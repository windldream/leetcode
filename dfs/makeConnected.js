/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  const len = connections.length;
  const hashMap = Array(len)
    .fill(0)
    .map((val, index) => index);
  if (len < n - 1) {
    return -1;
  }

  for (let [u, v] of connections) {
    union(u, v);
  }

  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(find(i));
  }
  return set.size - 1;

  // 压缩路径
  function find(x) {
    let r = x;
    while (hashMap[r] != r) {
      r = hashMap[r];
    }
    return (hashMap[x] = r);
  }

  function union(x, y) {
    const fx = find(x);
    const fy = find(y);
    if (fx != fy) {
      hashMap[fx] = fy;
    }
  }
};

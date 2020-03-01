/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  const totalSize = k ** n;
  const res = Array(n).fill('0');
  const visited = new Set();
  visited.add(res.join(''));
  if (dfs(res, totalSize, n, k, visited)) {
    return res.join('');
  }
  return '';

  function dfs(res, totalSize, n, k, visited) {
    if (visited.size === totalSize) {
      return true;
    }

    const shareStr = res.slice(res.length - n + 1);
    for (let c = '0'; c < '0' + k; c++) {
      shareStr.push(c);
      if (!visited.has(shareStr.join(''))) {
        res.push(c);
        visited.add(shareStr.join(''));
        if (dfs(res, totalSize, n, k, visited)) {
          return true;
        }
        visited.delete(shareStr.join(''));
        res.pop();
      }
      shareStr.pop();
    }
  }
};

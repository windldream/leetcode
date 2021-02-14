/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  const n = row.length
  const uf = Array(n).fill(0)
  for (let i = 0; i < n; i += 2) {
    uf[i] = i
    uf[i + 1] = i
  }
  for (let i = 0; i < n; i += 2) {
    const v = find(row[i])
    const u = find(row[i + 1])
    uf[u] = v
  }

  let ans = n / 2
  for (let i = 0; i < n; i++) {
    if (uf[i] === i) ans--
  }
  return ans

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }
}

minSwapsCouples([3, 2, 0, 1])

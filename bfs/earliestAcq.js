/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */
const earliestAcq = function(logs, N) {
  logs.sort((a, b) => a[0] - b[0])
  const uf = Array(N).fill(0).map((val, index) => index)
  let relations = N
  for (const [time, idA, idB] of logs) {
    const u = find(idA)
    const v = find(idB)
    if (u !== v) {
      union(u, v)
      relations--
      if (relations === 0) return time
    }
  }

  return -1

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    uf[u] =v
  }
};
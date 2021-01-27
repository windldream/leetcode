/**
 * @param {number} n
 * @param {number[][]} edgeList
 */
var DistanceLimitedPathsExist = function (n, edgeList) {
  this.edgeList = edgeList.sort((a, b) => a[2] - b[2])
  this.n = n
}

/**
 * @param {number} p
 * @param {number} q
 * @param {number} limit
 * @return {boolean}
 */
DistanceLimitedPathsExist.prototype.query = function (p, q, limit) {
  let idx = 0
  const len = this.edgeList.length
  const uf = Array(this.n)
    .fill(0)
    .map((val, idx) => idx)
  const edgeList = this.edgeList
  while (idx < len && edgeList[idx][2] < limit) {
    const x = find(uf, edgeList[idx][0])
    const y = find(uf, edgeList[idx][1])
    if (x !== y) union(x, y, uf)
    idx++
  }
  return find(uf, p) === find(uf, q)

  function find(uf, x) {
    if (uf[x] !== x) {
      uf[x] = find(uf, uf[x])
    }
    return uf[x]
  }

  function union(u, v, uf) {
    uf[u] = v
  }
}

/**
 * Your DistanceLimitedPathsExist object will be instantiated and called as such:
 * var obj = new DistanceLimitedPathsExist(n, edgeList)
 * var param_1 = obj.query(p,q,limit)
 */

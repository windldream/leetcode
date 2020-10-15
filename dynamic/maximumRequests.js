/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const len = requests.length
  let res = 0
  for (let state = 0; state < 1 << len; state++) {
    res = Math.max(res, tryRequest(n, requests, state))
  }
  return res

  function tryRequest(n, requests, state) {
    const outDegree = Array(n).fill(0)
    const inDegree = Array(n).fill(0)
    let index = 0,
      res = 0
    while (state) {
      if (state & 1) {
        outDegree[requests[index][0]] += 1
        inDegree[requests[index][1]] += 1
        res++
      }
      state = state >> 1
      index++
    }
    for (let i = 0; i < n; i++) {
      if (inDegree[i] !== outDegree[i]) return -1
    }
    return res
  }
}

maximumRequests(5, [
  [0, 1],
  [1, 0],
  [0, 1],
  [1, 2],
  [2, 0],
  [3, 4]
])

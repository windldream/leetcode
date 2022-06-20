/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */
var minmaxGasDist = function (stations, k) {
  const eps = 1e-6
  const n = stations.length
  let lo = 0
  let hi = stations[n - 1]
  let ans = 0

  while (hi - lo > eps) {
    const mid = (lo + hi) / 2

    if (check(stations, mid, n, k)) {
      hi = mid
      ans = mid
    } else {
      lo = mid
    }
  }

  return ans

  function check(stations, mid, n, k) {
    let num = 0

    for (let i = 0; i < n - 1; i++) {
      num += Math.trunc((stations[i + 1] - stations[i]) / mid)
    }

    return num <= k
  }
}

/**
 * @param {number[]} stations
 * @param {number} K
 * @return {number}
 */
const minmaxGasDist = function (stations, K) {
  let lo = 0
  let hi = stations[stations.length - 1]
  const eps = 1e-6
  while (hi - lo > eps) {
    const mid = (lo + hi) / 2
    if (possible(mid, stations, K)) {
      hi = mid
    } else {
      lo = mid
    }
  }
  return lo

  function possible(d, stations, K) {
    let used = 0
    for (let i = 0; i < stations.length - 1; i++) {
      used += Math.trunc((stations[i + 1] - stations[i]) / d)
    }
    return used <= K
  }
}

minmaxGasDist([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9)

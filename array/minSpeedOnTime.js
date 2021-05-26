/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  let hi = 1e7
  let lo = 1
  let ans = -1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (canArrive(dist, hour, mid)) {
      ans = mid
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
  return ans

  function canArrive(dist, hour, speed) {
    let cost = 0
    for (let i = 0; i < dist.length; i++) {
      if (i !== dist.length - 1) {
        cost += Math.ceil(dist[i] / speed)
      } else {
        cost += dist[i] / speed
      }
    }
    return cost <= hour
  }
}

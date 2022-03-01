/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  const n = dist.length
  const arrival = []

  for (let i = 0; i < n; i++) {
    arrival.push(Math.ceil(dist[i] / speed[i]))
  }

  arrival.sort((a, b) => b - a)

  let count = 0

  while (arrival.length) {
    const time = arrival.pop()
    if (count >= time) return count
    count++
  }

  return count
}

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const len = seats.length
  let max = 0
  for (let i = 0; i < len; i++) {
    if (seats[i] === 0) {
      let l = i - 1
      let r = i + 1
      while (seats[l] !== 1 && l >= 0) l--
      while (seats[r] !== 1 && r < len) r++
      if (l < 0) {
        max = Math.max(max, r - i)
      } else if (r === len) {
        max = Math.max(max, i - l)
      } else {
        max = Math.max(max, Math.min(i - l, r - i))
      }
    }
  }
  return max
}

maxDistToClosest([1, 0, 0, 0, 1, 0, 1])

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const len = bookings.length
  const ans = Array(n).fill(0)
  for (const [t, r, k] of bookings) {
    for (let i = t; i <= r; i++) {
      ans[i - 1] += k
    }
  }
  return ans
}

corpFlightBookings(
  [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25]
  ],
  5
)

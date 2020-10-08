/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function (n) {
  const mod = 10 ** 9 + 7
  let repeat = 6
  let unrepeat = 6
  for (let i = 2; i <= n; i++) {
    let newRep = (repeat * 3 + unrepeat * 2) % mod
    let newUnrep = (repeat * 2 + unrepeat * 2) % mod
    repeat = newRep
    unrepeat = newUnrep
  }
  return (repeat + unrepeat) % mod
}

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var nimGame = function (piles) {
  let xor = 0
  for (const pile of piles) {
    xor ^= pile
  }
  return xor !== 0
}

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function (hand, W) {
  const len = hand.length
  if (len % W !== 0) return false

  hand.sort((a, b) => a - b)
  while (hand.length) {
    const ans = [hand[0]]
    hand.shift()
    while (ans.length < W && hand.length) {
      const index = hand.indexOf(ans[ans.length - 1] + 1)
      if (index === -1) return false
      ans.push(hand[index])
      hand.splice(index, 1)
    }
    if (ans.length !== W) return false
  }

  return true
}

isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)

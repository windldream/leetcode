/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
  cards.sort((a, b) => b - a)

  const odd = [0]
  const even = [0]

  for (const card of cards) {
    if (card & 1) {
      odd.push(odd[odd.length - 1] + card)
    } else {
      even.push(even[even.length - 1] + card)
    }
  }

  let max = 0

  for (let i = 0; i < odd.length; i += 2) {
    if (cnt - i >= 0 && cnt - i < even.length) {
      max = Math.max(max, odd[i] + even[cnt - i])
    }
  }

  return max
}

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const len = deck.length
  if (len < 1) return []
  deck.sort((a, b) => a - b)
  const queue = []
  for (let i = len - 1; i >= 0; i--) {
    queue.push(deck[i])
    if (i === 0) break
    queue.push(queue.shift())
  }
  return queue.reverse()
}

deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  const ans = Array(26).fill(0)
  const len = releaseTimes.length
  for (let i = 0; i < len; i++) {
    const index = keysPressed[i].charCodeAt() - 'a'.charCodeAt()
    if (i === 0) {
      ans[index] = releaseTimes[i]
    } else {
      ans[index] = Math.max(ans[index], releaseTimes[i] - releaseTimes[i - 1])
    }
  }

  let res = -1
  let max = 0
  for (let i = 25; i >= 0; i--) {
    if (ans[i] > max) {
      max = ans[i]
      res = i
    }
  }
  return String.fromCharCode(res + 'a'.charCodeAt())
}

slowestKey([12, 23, 36, 46, 62], 'spuda')

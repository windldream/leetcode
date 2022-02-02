/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const countMap = Array(26).fill(0)
  let count = 0

  for (const ch of s) {
    const index = ch.charCodeAt() - 'a'.charCodeAt()
    countMap[index] += 1
    count = Math.max(count, countMap[index])
  }

  return countMap.filter((val) => val).every((val) => val === count)
}

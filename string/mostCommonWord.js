/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const map = new Map()
  const words = paragraph.split(/[\s,;!\?\.\']/).filter((val) => val)
  for (let word of words) {
    word = word.toLowerCase()
    if (banned.includes(word)) continue
    if (!map.has(word)) {
      map.set(word, 0)
    }
    map.set(word, map.get(word) + 1)
  }

  let ans = ''
  let max = 0
  for (const [key, val] of map) {
    if (val > max) {
      ans = key
      max = val
    }
  }
  return ans
}

mostCommonWord('a, a, a, a, b,b,b,c, c', ['a'])

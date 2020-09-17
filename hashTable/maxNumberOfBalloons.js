/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const map = new Map()
  for (const c of text) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  const tar = 'balloon'
  let ans = 0
  label: while (true) {
    for (const c of tar) {
      if (!map.has(c) || map.get(c) === 0) break label
      map.set(c, map.get(c) - 1)
    }
    ans++
  }
  return ans
}

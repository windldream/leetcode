/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {number}
 */
var countQuadruples = function (firstString, secondString) {
  const n = firstString.length
  const m = secondString.length
  const first = Array(26)
    .fill(0)
    .map(() => [])
  const second = Array(26)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < firstString.length; i++) {
    const index = firstString[i].charCodeAt() - 'a'.charCodeAt()
    first[index].push(i)
  }
  for (let i = 0; i < secondString.length; i++) {
    const index = secondString[i].charCodeAt() - 'a'.charCodeAt()
    second[index].push(i)
  }

  const list = []
  let min = Infinity
  for (let i = 0; i < 26; i++) {
    if (first[i].length === 0 || second[i].length === 0) continue
    if (first[i][0] - second[i][second[i].length - 1] <= min) {
      min = first[i][0] - second[i][second[i].length - 1]
      list.push([first[i][0], second[i][second[i].length - 1]])
    }
  }

  if (list.length === 0) return 0
  let ans = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] - list[i][1] === min) ans += 1
  }
  return ans
}

countQuadruples('abcd', 'bccdab')
// [0, 1, 4, 5] 1 - 4
// [0, 0, 4, 4] 0 - 4

/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return b[0] - a[0]
  })

  let cnt = 0
  let max = -1

  for (let i = 0; i < properties.length; i++) {
    if (max > properties[i][1]) {
      cnt++
    }
    max = Math.max(max, properties[i][1])
  }

  return cnt
}

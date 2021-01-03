/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 */
const minDistance = function (height, width, tree, squirrel, nuts) {
  let total = 0
  nuts.forEach((nut) => {
    total += getDis(nut, tree) * 2
  })

  let ans = Infinity
  nuts.forEach((nut) => {
    ans = Math.min(ans, total - getDis(nut, tree) + getDis(nut, squirrel))
  })
  return ans

  function getDis(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
  }
}

minDistance([
  [2, 0, 2, 0, 2],
  [2, 0, 0, 2, 2],
  [2, 2, 2, 2, 2],
  [2, 2, 0, 2, 2],
  [2, 2, 2, 2, 2]
])

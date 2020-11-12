/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let index = 0
  outer: while (index < arr.length) {
    for (let i = 0; i < pieces.length; i++) {
      if (pieces[i][0] === arr[index]) {
        let j = 0
        while (pieces[i][j] === arr[index] && j < pieces[i].length) {
          j++
          index++
        }
        if (pieces[i].length !== j) return false
        continue outer
      }
    }
    return false
  }
  return true
}

canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])

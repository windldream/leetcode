/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  if (!arr.includes(0)) return
  const len = arr.length
  let i = 0
  while (i < len) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i += 2
    } else {
      i++
    }
  }
  while (arr.length > len) {
    arr.pop()
  }
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])

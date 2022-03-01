/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    const idx1 = arr2.indexOf(a)
    const idx2 = arr2.indexOf(b)

    if (idx1 !== -1 && idx2 !== -1) {
      return idx1 - idx2
    }
    if (idx1 !== -1) {
      return -1
    }
    if (idx2 !== -1) {
      return 1
    }
    return a - b
  })
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return insertionSort(nums)

  function insertionSort(arr) {
    const len = arr.length
    let preIndex = -1
    let current = -1
    for (let i = 1; i < len; i++) {
      preIndex = i - 1
      current = arr[i]
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + 1] = arr[preIndex]
        preIndex--
      }
      arr[preIndex + 1] = current
    }
    return arr
  }
}

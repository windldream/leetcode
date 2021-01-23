/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return selectionSort(nums)

  function selectionSort(arr) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
    return arr
  }
}

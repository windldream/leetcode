/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  buildHeap(nums)
  let heapLen = nums.length
  while (k > 0 && heapLen > 1) {
    if (k === 1) return nums[0]
    heapLen--
    k--
    swap(nums, 0, heapLen)
    heapify(nums, heapLen, 0)
  }
  return nums[0]

  function buildHeap(arr) {
    let heapSize = arr.length
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
      heapify(arr, heapSize, i)
    }
  }

  function heapify(array, heapSize, i) {
    let left = i * 2 + 1,
      right = i * 2 + 2,
      largest = i

    // 取得最大的子节点
    if (left < heapSize && array[left] > array[largest]) {
      largest = left
    }

    if (right < heapSize && array[right] > array[largest]) {
      largest = right
    }

    if (largest !== i) {
      swap(array, i, largest)
      heapify(array, heapSize, largest)
    }
  }

  function swap(arr, index1, index2) {
    let temp = arr[index2]
    arr[index2] = arr[index1]
    arr[index1] = temp
  }
}

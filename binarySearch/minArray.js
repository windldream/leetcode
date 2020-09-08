/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let lo = 0
  let hi = numbers.length - 1
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1)
    // 右边有序
    if (numbers[mid] < numbers[hi]) {
      hi = mid
      // 左边有序
    } else if (numbers[mid] > numbers[hi]) {
      lo = mid + 1
    } else {
      hi--
    }
  }
  return numbers[lo]
}

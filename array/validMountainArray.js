/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  const len = arr.length
  if (len < 3) return false
  let isIncrease = false
  let isDecrease = false
  for (let i = 1; i < len; i++) {
    if (arr[i - 1] < arr[i]) {
      if (isDecrease) return false
      else if (!isIncrease) isIncrease = true
    } else if (arr[i - 1] > arr[i]) {
      if (!isDecrease) isDecrease = true
    } else {
      return false
    }
  }

  return isIncrease && isDecrease
}

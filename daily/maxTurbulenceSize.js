/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const len = arr.length

  let up = 1
  let down = 1
  let ans = 1
  for (let i = 1; i < len; i++) {
    if (arr[i] > arr[i - 1]) {
      up = down + 1
      down = 1
    } else if (arr[i] < arr[i - 1]) {
      down = up + 1
      up = 1
    } else {
      up = 1
      down = 1
    }
    ans = Math.max(ans, up, down)
  }
  return ans
}

maxTurbulenceSize([9, 9])

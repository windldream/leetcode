/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function (image, x, y) {
  const left = searchLeft(image, y)
  const right = searchRight(image, y)
  const top = searchTop(image, x)
  const bottom = searchBottom(image, x)

  return (bottom - top + 1) * (right - left + 1)

  function checkCol(image, t) {
    for (let i = 0; i < image.length; i++) {
      if (image[i][t] === '1') return true
    }

    return false
  }

  function searchLeft(image, k) {
    const n = image[0].length
    let l = 0
    let r = k
    let ans = k

    while (l <= r) {
      const mid = (l + r) >> 1

      if (checkCol(image, mid)) {
        ans = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    return ans
  }

  function searchRight(image, k) {
    const n = image[0].length
    let l = k
    let r = n - 1
    let ans = k

    while (l <= r) {
      const mid = (l + r) >> 1

      if (checkCol(image, mid)) {
        ans = mid
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    return ans
  }

  function checkRow(image, t) {
    for (let i = 0; i < image[0].length; i++) {
      if (image[t][i] === '1') return true
    }

    return false
  }

  function searchTop(image, k) {
    const m = image.length
    let l = 0
    let r = k
    let ans = k

    while (l <= r) {
      const mid = (l + r) >> 1

      if (checkRow(image, mid)) {
        ans = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    return ans
  }

  function searchBottom(image, k) {
    const m = image.length
    let l = k
    let r = m - 1
    let ans = k

    while (l <= r) {
      const mid = (l + r) >> 1

      if (checkRow(image, mid)) {
        ans = mid
        l = mid + 1
      } else {
        r = mid - 1
      }
    }

    return ans
  }
}

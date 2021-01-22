/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (bulbs, k) {
  const len = bulbs.length
  if (len === 0 || k < 0) return -1
  const arr = Array(len).fill(0)
  for (let i = 0; i < bulbs.length; i++) {
    arr[bulbs[i] - 1] = i + 1
  }

  let l = 0
  let r = k + 1
  let ans = Infinity
  while (r < len) {
    let newL = l
    for (let i = l + 1; i < r; i++) {
      if (arr[i] < arr[l] || arr[i] < arr[r]) {
        newL = i
        break
      }
    }

    if (newL === l) {
      ans = Math.min(ans, Math.max(arr[l], arr[r]))
      newL = r
    }
    l = newL
    r = l + k + 1
  }

  return ans === Infinity ? -1 : ans
}

kEmptySlots([1, 3, 2], 1)

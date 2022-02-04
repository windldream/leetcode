/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let count = 0
  let l = 0
  let r = plants.length - 1
  let alice = capacityA
  let bob = capacityB

  while (l < r) {
    if (alice < plants[l]) {
      alice = capacityA
      count++
    }

    if (bob < plants[r]) {
      bob = capacityB
      count++
    }

    alice -= plants[l++]
    bob -= plants[r--]
  }

  if (l === r) {
    if (alice < bob) {
      if (bob < plants[l]) {
        count++
      }
    } else {
      if (alice < plants[l]) {
        count++
      }
    }
  }

  return count
}

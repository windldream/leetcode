/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  const n = triplets.length
  const triplet = [0, 0, 0]

  for (let i = 0; i < n; i++) {
    if (equal(triplets[i], target)) return true
    if (triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && triplets[i][2] <= target[2]) {
      for (let j = 0; j < 3; j++) {
        triplet[j] = Math.max(triplet[j], triplets[i][j])
      }
      if (equal(triplet, target)) return true
    }
  }

  return false

  function equal(triplet, target) {
    return triplet[0] === target[0] && triplet[1] === target[1] && triplet[2] === target[2]
  }
}

mergeTriplets(
  [
    [2, 5, 3],
    [1, 8, 4],
    [1, 7, 5]
  ],
  [2, 7, 5]
)

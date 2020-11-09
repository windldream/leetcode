/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const len = rating.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if ((rating[i] < rating[j] && rating[j] < rating[k]) || (rating[i] > rating[j] && rating[j] > rating[k])) {
          ans++
        }
      }
    }
  }
  return ans
}

numTeams([2, 5, 3, 4, 1])

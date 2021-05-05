/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
// var maxAliveYear = function (birth, death) {
//   let cnt = 0
//   let ans = -1
//   for (let i = 1900; i <= 2000; i++) {
//     let live = 0
//     for (let j = 0; j <= birth.length; j++) {
//       if (birth[j] <= i && i <= death[j]) live++
//     }
//     if (live > cnt) {
//       cnt = live
//       ans = i
//     }
//   }
//   return ans
// }

// var maxAliveYear = function (birth, death) {
//   const counter = new Map()
//   const n = birth.length
//   let cnt = 0
//   let ans = Infinity
//   for (let i = 0; i < n; i++) {
//     for (let j = birth[i]; j <= death[i]; j++) {
//       counter.set(j, (counter.get(j) || 0) + 1)
//       if (counter.get(j) > cnt) {
//         cnt = counter.get(j)
//         ans = j
//       } else if (counter.get(j) === cnt) {
//         ans = Math.min(ans, j)
//       }
//     }
//   }
//   return ans
// }

var maxAliveYear = function (birth, death) {
  const lives = Array(101).fill(0)
  const n = birth.length
  let cnt = 0
  let ans = Infinity
  for (let i = 0; i < n; i++) {
    for (let j = birth[i] - 1900; j <= death[i] - 1900; j++) {
      lives[j] += 1
      if (lives[j] > cnt) {
        cnt = lives[j]
        ans = j
      } else if (lives[j] === cnt) {
        ans = Math.min(ans, j)
      }
    }
  }
  return ans + 1900
}

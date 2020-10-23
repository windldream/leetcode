/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  const map = {
    0: 0,
    1: 1,
    8: 8,
    2: 5,
    5: 2,
    6: 9,
    9: 6
  }
  const illegals = [3, 4, 7]
  let ans = 0
  label: for (let num = 1; num <= N; num++) {
    if (illegals.some((c) => (num + '').includes(c))) continue
    if (map[num] && map[num] !== num) {
      ans++
    } else {
      if (num < 10) continue
      let newNum = ''
      for (const c of num + '') {
        if (!Object.prototype.hasOwnProperty.call(map, c)) continue label
        newNum += map[c]
      }
      if (+newNum !== num) {
        ans++
      }
    }
  }
  return ans
}

rotatedDigits(20)

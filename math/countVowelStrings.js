/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1
  for (let k = 2; k <= n; k++) {
    a = a + e + i + o + u
    e = e + i + o + u
    i = i + o + u
    o = o + u
    u = u
  }
  return a + e + i + o + u
}

countVowelStrings(3)

// a 5
// e 4
// i 3
// o 2
// u 1
// 15

// a  15
// e  10
// i  6
// o  3
// u  1
// 35

// 35
// 20
// 10
// 4
// 1

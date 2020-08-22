/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = []
  let i = 0

  while (i < s.length) {
    if (stack.length && stack[stack.length - 1][0] === s[i]) {
      let count = stack[stack.length - 1][1] + 1
      if (count === k) {
        for (let j = k - 2; j >= 0; j--) {
          stack.pop()
        }
      } else {
        stack.push([s[i], count])
      }
    } else {
      stack.push([s[i], 1])
    }
    i++
  }

  return stack.map((item) => item[0]).join('')
}

removeDuplicates('pbbcggttciiippooaais', 2)

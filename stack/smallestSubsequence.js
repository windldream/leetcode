/**
 * @param {string} s
 * @param {number} k
 * @param {character} letter
 * @param {number} repetition
 * @return {string}
 */
var smallestSubsequence = function (s, k, letter, repetition) {
  const n = s.length
  const stack = []
  let cnt = 0

  for (const ch of s) {
    if (ch === letter) cnt++
  }

  let earse = n - k
  let visitedCnt = 0

  for (const ch of s) {
    while (earse && stack.length && stack[stack.length - 1] > ch) {
      if (stack[stack.length - 1] === letter) {
        if (repetition > visitedCnt - 1 + cnt) {
          break
        }

        visitedCnt--
      }

      earse--
      stack.pop()
    }

    if (ch === letter) {
      visitedCnt++
      cnt--
    }

    stack.push(ch)
  }

  while (stack.length > k) {
    if (stack[stack.length - 1] === letter) visitedCnt--
    stack.pop()
  }

  for (let i = k - 1; i >= 0; i--) {
    if (visitedCnt < repetition && stack[i] !== letter) {
      stack[i] = letter
      visitedCnt++
    }
  }

  return stack.join('')
}

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = function(keyboard, word) {
  let start = 0
  let ans = 0
  for (const str of word) {
    const index = keyboard.indexOf(str)
    ans += Math.abs(index - start)
    start = index
  }
  return ans
};
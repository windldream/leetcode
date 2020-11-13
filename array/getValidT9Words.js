/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function (num, words) {
  const nums = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  for (let i = 0; i < num.length; i++) {
    const chars = nums[num[i] - 2]
    words = words.filter((word) => {
      return chars.includes(word[i])
    })
  }
  return words
}

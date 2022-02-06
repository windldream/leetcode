/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  return Math.max(caluCount(answerKey, k, 'T'), caluCount(answerKey, k, 'F'))

  function caluCount(answerKey, k, type) {
    let count = 0
    let l = 0
    let r = 0
    let ans = 0

    // 全部变成 F
    while (r < answerKey.length) {
      count += answerKey[r] === type ? 1 : 0

      while (count > k) {
        count -= answerKey[l] === type ? 1 : 0
        l++
      }

      r++
      ans = Math.max(ans, r - l)
    }

    return ans
  }
}

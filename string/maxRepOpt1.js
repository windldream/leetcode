/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const len = text.length
  const hash = {}
  for (const c of text) {
    if (!hash[c]) hash[c] = 0
    hash[c] += 1
  }

  const nums = Array(len).fill(0)
  let idx = -1
  let ans = 0
  for (let i = 0; i < len; i++) {
    let j = i
    while (j < len && text[j] === text[i]) j++
    nums[++idx] = j - i
    // 相邻的子串之隔一个字母
    if (idx > 1 && nums[idx - 1] === 1 && i > 1 && text[i - 2] === text[i]) {
      ans = Math.max(ans, Math.min(nums[idx] + nums[idx - 2] + 1, hash[text[i]]))
    }
    ans = Math.max(ans, Math.min(nums[idx] + 1, hash[text[i]]))
    i = j - 1
  }
  return ans
}

maxRepOpt1('bbababaaaa')

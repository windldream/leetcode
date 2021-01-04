/**
 * @param {number} N
 * @return {number}
 */
var confusingNumberII = function(N) {
  let count = 0
  const validMap = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  }
  const validNums = ['0', '1', '6', '8', '9']
  backtracking('', N)
  return count++

  function backtracking(str, N) {
    if (+str > N) return
    if (str.length && str[0] === '0') return
    count += isConfusingNum(str)
    for (const c of validNums) {
      backtracking(str + c, N)
    }
  }

  function isConfusingNum(str) {
    let ans = ''
    for (let i = str.length - 1; i >= 0; i--) {
      if (!validMap[str[i]]) return false
      ans += validMap[str[i]]
    }
    return ans !== str
  }
};
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  const len = n.length
  if (len === 1) return +n - 1 + ''

  let palidrome = ''
  const mid = len >> 1
  if (len % 2) {
    palidrome = n.slice(0, mid + 1) + n.slice(0, mid).split('').reverse().join('')
  } else {
    palidrome = n.slice(0, mid) + n.slice(0, mid).split('').reverse().join('')
  }
  const palidromeNum = BigInt(palidrome)
  const num = BigInt(n)
  const smallNum = palidromeNum < num ? palidromeNum : BigInt(getSmall(palidrome))
  const bigNum = palidromeNum > num ? palidromeNum : BigInt(getBig(palidrome))
  if (num - smallNum <= bigNum - num) return smallNum + ''
  return bigNum + ''

  function getSmall(str) {
    const len = str.length
    let mid = len >> 1
    if (len % 2 === 0) mid--
    while (mid >= 0 && str[mid] === '0') mid--

    let ans = ''
    if (mid === 0 && str[0] === '1') {
      ans = '9'.repeat(len - 1)
    } else {
      const minNum = +str[mid] - 1 + ''
      const left = str.slice(0, mid)
      const right = left.split('').reverse().join('')
      if (len % 2) {
        if (mid === len >> 1) {
          ans = left + minNum + right
        } else {
          ans = left + minNum + '9'.repeat(Math.max((len >> 1) - 1 - mid, 0) * 2 + 1) + minNum + right
        }
      } else {
        ans = left + minNum + '9'.repeat(Math.max((len >> 1) - 1 - mid, 0) * 2) + minNum + right
      }
    }
    return ans
  }

  function getBig(str) {
    const len = str.length
    let mid = len >> 1
    if (len % 2 === 0) mid--
    while (mid >= 0 && str[mid] === '9') mid--

    let ans = ''
    if (mid === -1) {
      ans = '1' + '0'.repeat(len - 1) + '1'
    } else {
      const maxNum = +str[mid] + 1 + ''
      const left = str.slice(0, mid)
      const right = left.split('').reverse().join('')
      if (len % 2) {
        if (mid === len >> 1) {
          ans = left + maxNum + right
        } else {
          ans = left + maxNum + '0'.repeat(Math.max((len >> 1) - 1 - mid, 0) * 2 + 1) + maxNum + right
        }
      } else {
        ans = left + maxNum + '0'.repeat(Math.max((len >> 1) - 1 - mid, 0) * 2) + maxNum + right
      }
    }
    return ans
  }
}

nearestPalindromic('807045053224792883')

/**
 * @param {string[]} strs
 * @return {string}
 */
const splitLoopedString = function (strs) {
  const len = strs.length
  for (let i = 0; i < len; i++) {
    const str = strs[i]
    const rev = str.split('').reverse().join('')
    if (rev.localeCompare(str) > 0) {
      strs[i] = rev
    }
  }

  let ans = ''
  for (let i = 0; i < len; i++) {
    const str = strs[i]
    const rev = str.split('').reverse().join('')
    let other = ''
    for (let j = i + 1; j < len; j++) {
      other += strs[j]
    }
    for (let j = 0; j < i; j++) {
      other += strs[j]
    }
    for (let j = 0; j < str.length; j++) {
      const cur = str.substring(j) + other + str.substring(0, j)
      if (cur.localeCompare(ans) > 0) {
        ans = cur
      }
    }
    for (let j = 0; j < str.length; j++) {
      const cur = rev.substring(j) + other + rev.substring(0, j)
      if (cur.localeCompare(ans) > 0) {
        ans = cur
      }
    }
  }
  return ans
}

splitLoopedString(['abc', 'xyz'])

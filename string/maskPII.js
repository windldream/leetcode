/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function (S) {
  if (/\d/.test(S)) {
    const str = S.replace(/[\(\)\s+-]/g, '')
    if (str.length === 10) {
      return '***-***-' + str.substr(str.length - 4, 4)
    }
    return '+' + '*'.repeat(str.length - 10) + '-***-***-' + str.substr(str.length - 4, 4)
  } else {
    const arr = S.toLowerCase().split(/[\@\.]/)
    const first = arr[0]
    return first[0] + '*****' + first[first.length - 1] + '@' + arr[1] + '.' + arr[2]
  }
}

maskPII('+(501321)-50-23431')

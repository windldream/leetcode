/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ipStr = ''
  const res = []

  for (let a = 1; a < 4; a++) {
    for (let b = 1; b < 4; b++) {
      for (let c = 1; c < 4; c++) {
        for (let d = 1; d < 4; d++) {
          if (a + b + c + d === s.length) {
            const s1 = parseInt(s.substring(0, a))
            const s2 = parseInt(s.substring(a, a + b))
            const s3 = parseInt(s.substring(a + b, a + b + c))
            const s4 = parseInt(s.substring(a + b + c))
            if (s1 <= 255 && s2 <= 255 && s3 <= 255 && s4 <= 255) {
              ipStr = s1 + '.' + s2 + '.' + s3 + '.' + s4
              if (ipStr.length === s.length + 3) {
                res.push(ipStr)
              }
              ipStr = ''
            }
          }
        }
      }
    }
  }

  return res
}

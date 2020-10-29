/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
  num = num + ''
  const len = num.length

  let i = 0
  let max = num
  while (i < len) {
    if (num[i] !== '9') {
      const reg = new RegExp(`${num[i]}`, 'g')
      max = num.replace(reg, '9')
      break
    }
    i++
  }

  i = 0
  let min = num
  while (i < len) {
    if (i === 0) {
      if (num[i] !== '1') {
        const reg = new RegExp(`${num[i]}`, 'g')
        min = num.replace(reg, '1')
        break
      }
    } else {
      if (num[i] !== '0' && num[i] !== num[0]) {
        const reg = new RegExp(`${num[i]}`, 'g')
        min = num.replace(reg, '0')
        break
      }
    }
    i++
  }

  return +max - +min
}

maxDiff(9288)

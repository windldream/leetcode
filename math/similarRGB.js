/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
  let diff = Infinity
  let ans = ''
  const map = {
    '10': 'a',
    '11': 'b',
    '12': 'c',
    '13': 'd',
    '14': 'e',
    '15': 'f'
  }
  const ab = '0x' + color.substring(1, 3)
  const cd = '0x' + color.substring(3, 5)
  const ef = '0x' + color.substring(5, 7)
  for (let i = 0; i < 16; i++) {
    let uv = ''
    if (i > 9) {
      uv = '0x' + map[i].repeat(2)
    } else {
      uv = '0x' + i + '' + i
    }
    const diff1 = (parseInt(ab, 16) - parseInt(uv, 16)) ** 2
    for (let j = 0; j < 16; j++) {
      let wx = ''
      if (j > 9) {
        wx = '0x' + map[j].repeat(2)
      } else {
        wx = '0x' + j + '' + j
      }
      const diff2 = (parseInt(cd, 16) - parseInt(wx, 16)) ** 2
      for (let k = 0; k < 16; k++) {
        let yz = ''
        if (k > 9) {
          yz = '0x' + map[k].repeat(2)
        } else {
          yz = '0x' + k + '' + k
        }
        const diff3 = (parseInt(ef, 16) - parseInt(yz, 16)) ** 2
        if (diff1 + diff2 + diff3 < diff) {
          diff = diff1 + diff2 + diff3
          ans = '#' + uv.slice(2) + wx.slice(2) + yz.slice(2)
        }
      }
    }
  }
  return ans
};
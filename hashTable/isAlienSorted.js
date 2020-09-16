/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    if (!check(words[i], words[i + 1])) return false
  }
  return true

  function check(a, b) {
    const len1 = a.length
    const len2 = b.length
    let i = 0
    while (i < len1 && i < len2) {
      if (order.indexOf(a[i]) < order.indexOf(b[i])) return true
      else if (order.indexOf(a[i]) > order.indexOf(b[i])) return false
      i++
    }

    return len1 <= len2
  }
}

isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')

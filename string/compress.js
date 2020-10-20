/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0
  while (i < chars.length) {
    const c = chars[i]
    let j = i + 1
    while (chars[j] === c) j++
    const diff = j - i
    if (diff > 1) {
      const list = []
      for (let c of diff + '') list.push(c)
      chars.splice(i + 1, diff - 1, ...list)
      i += list.length + 1
    } else {
      i++
    }
  }

  return chars.length
}

compress(['a', 'a', 'b', 'b', 'c', 'c', 'c', 'a'])

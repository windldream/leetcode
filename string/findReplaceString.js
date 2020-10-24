/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
  const len = indexes.length
  const list = []
  for (let i = 0; i < len; i++) {
    if (S.startsWith(sources[i], indexes[i])) {
      list.push([indexes[i], sources[i], targets[i]])
    }
  }

  list.sort((a, b) => a[0] - b[0])
  let ans = ''
  let i = 0
  while (i < S.length) {
    let index = list.findIndex(([index]) => index === i)
    if (index > -1) {
      ans += list[index][2]
      i += list[index][1].length
    } else {
      ans += S[i]
      i++
    }
  }
  return ans
}

findReplaceString('abcd', [0, 2], ['a', 'cd'], ['eee', 'ffff'])

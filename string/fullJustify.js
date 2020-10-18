/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = []
  let temp = [words.shift()],
    count = temp[0].length
  for (let word of words) {
    if (count + 1 + word.length <= maxWidth) {
      temp.push(' ' + word)
      count = count + 1 + word.length
    } else {
      while (count < maxWidth) {
        if (temp.length === 1) {
          temp[0] += ' '.repeat(maxWidth - count)
          break
        } else {
          for (let i = 1; i < temp.length && count < maxWidth; i++) {
            temp[i] = ' ' + temp[i]
            count++
          }
        }
      }
      res.push(temp.join(''))
      count = word.length
      temp = [word]
    }
  }
  if (count > 0) {
    temp.push(' '.repeat(maxWidth - count))
    res.push(temp.join(''))
  }
  return res
}

fullJustify(
  [
    'The',
    'important',
    'thing',
    'is',
    'not',
    'to',
    'stop',
    'questioning.',
    'I',
    'Curiosity',
    'has',
    'its',
    'own',
    'reason',
    'for',
    'existing.'
  ],
  17
)

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
  let merge = ''
  outer: while (word1.length || word2.length) {
    if (word1.length && word2.length) {
      if (word1[0].localeCompare(word2[0]) > 0) {
        merge += word1[0]
        word1 = word1.substring(1)
      } else if (word1[0].localeCompare(word2[0]) < 0) {
        merge += word2[0]
        word2 = word2.substring(1)
      } else {
        for (let i = 1; i < Math.min(word1.length, word2.length); i++) {
          if (word1[i].localeCompare(word2[i]) > 0) {
            merge += word1[0]
            word1 = word1.substring(1)
            continue outer
          } else if (word1[i].localeCompare(word2[i]) < 0) {
            merge += word2[0]
            word2 = word2.substring(1)
            continue outer
          }
        }
        if (word1.length > word2.length) {
          merge += word1[0]
          word1 = word1.substring(1)
        } else {
          merge += word2[0]
          word2 = word2.substring(1)
        }
      }
    } else if (word1.length) {
      merge += word1[0]
      word1 = word1.substring(1)
    } else if (word2.length) {
      merge += word2[0]
      word2 = word2.substring(1)
    }
  }
  return merge
}

largestMerge('cabaa', 'bcaaa')

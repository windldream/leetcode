/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2) return true
  const s1 = sentence1.split(' ')
  const s2 = sentence2.split(' ')
  if (s1.length < s2.length) {
    return check(s2, s1)
  }
  return check(s1, s2)

  function check(s1, s2) {
    let startI = 0
    let startJ = 0
    while (startJ < s2.length) {
      if (s1[startI] === s2[startJ]) {
        startI++
        startJ++
      } else {
        break
      }
    }

    let endI = s1.length - 1
    let endJ = s2.length - 1
    while (endJ >= 0) {
      if (s1[endI] === s2[endJ]) {
        endI--
        endJ--
      } else {
        break
      }
    }

    return (startI !== 0 || endJ !== s2.length - 1) && endJ === startJ - 1
  }
}

areSentencesSimilar('Luky', 'Lucccky')

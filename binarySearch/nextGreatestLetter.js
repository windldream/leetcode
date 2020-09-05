/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let lo = 0
  let hi = letters.length - 1
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (letters[mid] < target) {
      lo = mid + 1
    } else if (letters[mid] > target) {
      hi = mid
    } else {
      lo++
    }
  }

  return letters[lo] > target ? letters[lo] : 0
}

nextGreatestLetter(['c', 'f', 'j'], 'a')

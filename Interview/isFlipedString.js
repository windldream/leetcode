/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) return false
  return (s1 + s1).includes(s2)
}

// waterbottlewaterbottle

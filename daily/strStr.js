/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   const m = haystack.length
//   const n = needle.length
//   if (n === 0) return 0
//   if (m === 0) return -1
//   return haystack.indexOf(needle)
// }

var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0
  const next = getNext(needle)
  let j = -1
  for (let i = 0; i < haystack.length; i++) {
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j]
    }
    if (haystack[i] === needle[j + 1]) j++
    if (j === needle.length - 1) {
      return i - needle.length + 1
    }
  }
  return -1

  function getNext(s) {
    const n = s.length
    const next = Array(n).fill(0)
    let j = -1
    next[0] = j
    for (let i = 1; i < n; i++) {
      while (j >= 0 && s[i] !== s[j + 1]) {
        j = next[j]
      }
      if (s[i] === s[j + 1]) j++
      next[i] = j
    }
    return next
  }
}

// a aa aab
// a ba aba

// a aa aab aaba
// a aa baa abaa

// a aa aab aaba aabaa
// f af aaf baaf abaaf

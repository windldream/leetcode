/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const digits = ['zero', 'one', 'two', 'there', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const ans = []
  const map = new Map()
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  if (map.has('z')) {
    add(ans, digits, 0, 'z')
  }
  if (map.has('w')) {
    add(ans, digits, 2, 'w')
  }
  if (map.has('u')) {
    add(ans, digits, 4, 'u')
  }
  if (map.has('r')) {
    add(ans, digits, 3, 'r')
  }
  if (map.has('f')) {
    add(ans, digits, 5, 'f')
  }
  if (map.has('x')) {
    add(ans, digits, 6, 'x')
  }
  if (map.has('v')) {
    add(ans, digits, 7, 'v')
  }
  if (map.has('g')) {
    add(ans, digits, 8, 'g')
  }
  if (map.has('i')) {
    add(ans, digits, 9, 'i')
  }
  if (map.has('o')) {
    add(ans, digits, 1, 'o')
  }

  return ans.sort((a, b) => a - b).join('')

  function add(arr, digits, i, str) {
    while (map.get(str) > 0) {
      arr.push(i)
      for (const c of digits[i]) {
        map.set(c, map.get(c) - 1)
      }
    }
  }
}

originalDigits('esnve')

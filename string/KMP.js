function KMP(t, p, next) {
  let i = 0
  let j = 0
  while (i < t.length && j < p.length) {
    if (j === -1 || t[i] === p[j]) {
      i++
      j++
    } else {
      j = next[j]
    }
  }
  if (j === p.length) return i - j
  return -1
}

function getNext(p) {
  const next = [-1]
  let i = 0
  let j = -1
  // 以模式字符串为主字符串，以模式字符串的前缀为目标字符串
  while (i < p.length) {
    if (j === -1 || p[i] === p[j]) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }
  return next
}

getNext('acccbaaacccbaac')

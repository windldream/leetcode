/**
 * @param {string} num
 * @return {string}
 */
var nextPalindrome = function (num) {
  const n = num.length
  const v = []
  let flag = false
  for (let i = 0; i < n; i++) v[i] = +num[i]

  helper(v, (n >> 1) - 1)
  if (!flag) return ''

  for (let i = 0; i < n >> 1; i++) {
    v[n - i - 1] = v[i]
  }

  return v.join('')

  function helper(num, r) {
    let next = -1
    let pre = r
    while (r >= 0 && num[r] >= next) {
      next = num[r]
      r--
    }

    // 如果num是单调递减
    if (r === -1) return ''
    else flag = true

    for (let i = pre; i > r; i--) {
      if (num[r] < num[i]) {
        swap(num, i, r)
        break
      }
    }

    for (let i = r + 1, j = pre; i < j; i++, j--) {
      swap(num, i, j)
    }
  }

  function swap(num, l, r) {
    const temp = num[l]
    num[l] = num[r]
    num[r] = temp
  }
}

helper([6, 5, 1, 4], 3)

// 6514
//

/**
 * @param {number} N
 * @return {number}
 */
var primePalindrome = function (N) {
  const check = [2, 2, 2, 3, 5, 5, 7, 7, 11, 11, 11, 11]
  if (N < check.length && check[N] > 0) return check[N]

  while (true) {
    const mod = N % 6
    const str = N + ''
    if ((str.length & 1) === 0) {
      N = Math.pow(10, str.length) + 1
      continue
    }
    if (mod === 1 || mod === 5) {
      let isPrime = true
      let isPalindrome = true
      for (
        let i = 5, j = 0, l1 = Math.trunc(Math.sqrt(N)), len = str.length, l2 = len >> 1;
        i <= l1 || j < l2;
        i += 6, j++
      ) {
        if (i <= l1 && (N % i === 0 || N % (i + 2) === 0)) {
          isPrime = false
          break
        }
        if (j < l2 && str[j] != str[len - j - 1]) {
          isPalindrome = false
          break
        }
      }
      if (isPrime && isPalindrome) return N
      N = mod === 1 ? N + 4 : N + 2
    } else {
      N = mod === 0 ? N + 1 : N + (5 - mod)
    }
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = Array(n)
    .fill(0)
    .map((val, idx) => idx)
  let ans = 1
  perm = trans(perm)

  while (!check(perm)) {
    perm = trans(perm)
    ans += 1
  }
  return ans

  function trans(perm) {
    const arr = Array(n).fill(0)
    for (let i = 0; i < n; i++) {
      if (i & 1) {
        arr[i] = perm[n / 2 + (i - 1) / 2]
      } else {
        arr[i] = perm[i / 2]
      }
    }
    return arr
  }

  function check(arr) {
    return arr.every((val, idx) => val === idx)
  }
}

reinitializePermutation(4)

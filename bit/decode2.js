/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1
  let total = 0
  for (let i = 1; i <= n; i++) {
    total ^= i
  }

  let first = total
  for (let i = 1; i < n - 1; i += 2) {
    first ^= encoded[i]
  }

  const ans = [first]
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] ^ encoded[i - 1]
  }
  return ans
}
// perm[i] ^ perm[i] ^ perm[i + 1]

/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  const n = encoded.length + 1
  let total = 0
  for (let i = 1; i <= n; i++) total ^= i
  for (let i = 1; i <= n - 1; i += 2) total ^= encoded[i]
  const ans = [total]
  for (let i = 1; i < n; i++) {
    ans[i] = ans[i - 1] ^ encoded[i - 1]
  }
  return ans
}

// p[i] ^ p[i + 1]  ^  p[i + 1] ^ p[i + 2]  ^  p[i + 2] ^ p[i + 3] ^  p[i + 3] ^ p[i + 4]

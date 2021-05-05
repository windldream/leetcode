/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const ans = [first]
  for (let i = 0; i < encoded.length; i++) {
    ans[i + 1] = ans[i] ^ encoded[i]
  }
  return ans
}

//
// encoded[i] = arr[i] ^ arr[i + 1] ^ arr[i]

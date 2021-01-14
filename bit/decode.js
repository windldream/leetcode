/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  const ans = []
  ans.push(first)
  let prev = first
  for (let i = 0; i < encoded.length; i++) {
    prev = prev ^ encoded[i]
    ans.push(prev)
  }
  return ans
};
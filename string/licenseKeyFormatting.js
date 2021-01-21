/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function (S, K) {
  const str = S.split('-').join('').toUpperCase()
  const mod = str.length % K
  let ans = str.substring(0, mod)
  for (let i = mod; i < str.length; i += K) {
    ans += '-' + str.substring(i, i + K)
  }
  if (mod === 0) ans = ans.substring(1)
  return ans
}

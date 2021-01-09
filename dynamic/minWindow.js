/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const minWindow = function (S, T) {
  if (S === T) return S
  const n = S.length
  const m = T.length
  if (n < m) return ''

  let l = 0
  let r = n - 1
  let s = 0
  let t = 0
  while (s < n) {
    if (S[s] === T[t]) {
      t++
    }
    if (t === m) {
      let right = s
      t--
      while (t >= 0) {
        if (S[s] === T[t]) {
          t--
        }
        s--
      }
      s++
      if (right - s + 1 < r - l + 1) {
        l = s
        r = right
      }
      t = 0
    }
    s++
  }

  return r - l + 1 === S.length ? '' : S.substring(l, r + 1)
}

minWindow(
  'ffynmlzesdshlvugsigobutgaetsnjlizvqjdpccdylclqcbghhixpjihximvhapymfkjxyyxfwvsfyctmhwmfjyjidnfryiyajmtakisaxwglwpqaxaicuprrvxybzdxunypzofhpclqiybgniqzsdeqwrdsfjyfkgmejxfqjkmukvgygafwokeoeglanevavyrpduigitmrimtaslzboauwbluvlfqquocxrzrbvvplsivujojscytmeyjolvvyzwizpuhejsdzkfwgqdbwinkxqypaphktonqwwanapouqyjdbptqfowhemsnsl',
  'ntimcimzah'
)

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const ans = new Set()
  for (const email of emails) {
    let [native, domain] = email.split('@')
    if (native.includes('+')) {
      const index = native.indexOf('+')
      native = native.substring(0, index)
    }
    native = native.replace(/\./g, '')
    ans.add(native + '@' + domain)
  }
  return ans.size
}

numUniqueEmails(['test.email+alex@leetcode.com', 'test.email.leet+alex@code.com'])

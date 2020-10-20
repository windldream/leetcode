/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  if (IP.includes('.')) return checkIp4(IP)
  return checkIp6(IP)

  function checkIp4(ip) {
    const arr = ip.split('.')
    if (arr.length !== 4) return 'Neither'
    for (const num of arr) {
      if (num > 255) return 'Neither'
      if ((Number(num) + '').length !== num.length) return 'Neither'
    }
    return 'IPv4'
  }

  function checkIp6(ip) {
    const arr = ip.split(':')
    const reg = /[g-z]/i
    if (arr.length !== 8) return 'Neither'
    for (const num of arr) {
      if (num.length === 0 || num.length > 4 || parseInt(num, 16) > 65535) return 'Neither'
      if (reg.test(num)) return 'Neither'
    }
    return 'IPv6'
  }
}

validIPAddress('20EE:FGb8:85a3:0:0:8A2E:0370:7334')

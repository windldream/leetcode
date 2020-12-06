/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
var ipToCIDR = function (ip, n) {
  let start = ipToInt(ip)
  const ans = []
  while (n > 0) {
    const mask = Math.max(33 - bitLen(start & -start), 33 - bitLen(BigInt(n)))
    ans.push(intToIp(start) + '/' + mask)
    start += BigInt(1 << (32 - mask))
    n -= 1 << (32 - mask)
  }
  return ans

  function intToIp(x) {
    const a = x >> 24n
    const b = (x >> 16n) % 256n
    const c = (x >> 8n) % 256n
    const d = x % 256n
    return `${a}.${b}.${c}.${d}`
  }

  function ipToInt(ip) {
    const ips = ip.split('.')
    let ans = 0n
    for (const num of ips) {
      ans = 256n * ans + BigInt(num)
    }
    return ans
  }

  function bitLen(x) {
    if (x === 0n) return 1
    let ans = 0
    while (x > 0n) {
      x >>= 1n
      ans++
    }
    return ans
  }
}

ipToCIDR('255.0.0.7', 10)

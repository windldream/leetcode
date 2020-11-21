/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  let m = arr1.length - 1
  let n = arr2.length - 1
  const ans = []
  let carry = 0
  while (m >= 0 && n >= 0) {
    carry *= -1
    const sum = arr1[m] + arr2[n] + carry
    ans.push(sum & 1)
    carry = sum < 0 ? -1 : sum >> 1
    m--
    n--
  }

  while (m >= 0) {
    carry *= -1
    const sum = arr1[m] + carry
    ans.push(sum & 1)
    carry = sum < 0 ? -1 : sum >> 1
    m--
  }

  while (n >= 0) {
    carry *= -1
    const sum = arr2[n] + carry
    ans.push(sum & 1)
    carry = sum < 0 ? -1 : sum >> 1
    n--
  }

  while (carry) {
    carry *= -1
    ans.push(carry & 1)
    carry = carry < 0 ? -1 : carry >> 1
  }

  while (ans.length > 1 && ans[ans.length - 1] === 0) {
    ans.pop()
  }

  return ans.reverse()
}

addNegabinary([1, 1, 1, 1, 1], [1, 0, 1, 1, 1])

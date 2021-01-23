/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var countSteppingNumbers = function (low, high) {
  const ans = []
  if (low === 0) ans.push(0)
  for (let i = 1; i < 10; i++) {
    backtracking(i + '')
  }
  return ans.sort((a, b) => a - b)

  function backtracking(num) {
    if (num > high) {
      return
    }
    if (!ans.includes(+num) && num >= low) {
      ans.push(+num)
    }

    const last = +num[num.length - 1]
    if (last === 9) {
      backtracking(num + (last - 1))
    } else if (last === 0) {
      backtracking(num + (last + 1))
    } else {
      backtracking(num + (last - 1))
      backtracking(num + (last + 1))
    }
  }
}

countSteppingNumbers(0, 21)

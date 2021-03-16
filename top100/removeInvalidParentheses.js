/**
 * @param {string} s
 * @return {string[]}
 */
// var removeInvalidParentheses = function (s) {
//   let left = 0
//   let right = 0
//   for (const c of s) {
//     if (c === '(') {
//       left += 1
//     } else if (c === ')') {
//       if (left === 0) {
//         right += 1
//       } else {
//         left -= 1
//       }
//     }
//   }

//   const ans = []
//   dfs(s, left, right, 0)
//   return ans

//   function dfs(s, l, r, index) {
//     if (l === 0 && r === 0 && check(s)) {
//       ans.push(s)
//       return
//     }

//     for (let i = index; i < s.length; i++) {
//       if (i - 1 >= index && s[i] === s[i - 1]) continue
//       if (l > 0 && s[i] === '(') {
//         dfs(s.substring(0, i) + s.substring(i + 1), l - 1, r, i)
//       }
//       if (r > 0 && s[i] === ')') {
//         dfs(s.substring(0, i) + s.substring(i + 1), l, r - 1, i)
//       }
//     }
//   }

//   function check(s) {
//     let l = 0
//     for (const c of s) {
//       if (c === '(') {
//         l += 1
//       } else if (c === ')') {
//         if (l === 0) return false
//         l -= 1
//       }
//     }
//     return l === 0
//   }
// }

var removeInvalidParentheses = function (s) {
  let list = [s]
  while (true) {
    const validList = list.filter((str) => check(str))
    if (validList.length) return validList
    const tmp = new Set()
    for (const str of list) {
      for (let i = 0; i < str.length; i++) {
        if (s[i] === '(' || s[i] === ')') {
          tmp.add(str.substring(0, i) + str.substring(i + 1))
        }
      }
    }
    list = [...tmp]
  }

  function check(s) {
    let l = 0
    for (const c of s) {
      if (c === '(') {
        l += 1
      } else if (c === ')') {
        if (l === 0) return false
        l -= 1
      }
    }
    return l === 0
  }
}

removeInvalidParentheses('()())()')

/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function (prices) {
  const n = prices.length
  let a = 1
  let b = 1
  let ans = 1

  for (let i = 1; i < n; i++) {
    a = 1

    if (prices[i] === prices[i - 1] - 1) {
      a += b
    }

    ans += a
    b = a
  }

  return ans
}

// async function aa() {
//   await !(function () {
//     console.log(11)
//   })()
//   console.log(22)
// }

// aa()

// console.log(33)

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

// function async1() {
//   return new Promise((resolve) => {
//     console.log('async1 start')
//     async2()
//     resolve()
//   }).then(() => {
//     console.log('async1 end')
//   })
// }

// async function async2() {
//   console.log('async2')
// }

// console.log('script start')
// async1()
// console.log('script end')

// 执行顺序
// script start -> async1 start -> sasync2 -> cript end -> async1 end

// async 函数返回一个 Promise 对象，当函数执行的时候，
// 一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。
// 可以理解为，是让出了线程，跳出了 async 函数体。

function* aa() {
  yield 1
  yield 2
}

console.log(typeof aa())

/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  const n = A.length
  if (n < 3) return true

  const increaseStack = []
  const decreaseStack = []
  for (let i = 0; i < n; i++) {
    while (increaseStack.length && increaseStack[increaseStack.length - 1] > A[i]) {
      increaseStack.pop()
    }
    increaseStack.push(A[i])

    while (decreaseStack.length && decreaseStack[decreaseStack.length - 1] < A[i]) {
      decreaseStack.pop()
    }
    decreaseStack.push(A[i])
  }

  return decreaseStack.length === n || increaseStack.length === n
}

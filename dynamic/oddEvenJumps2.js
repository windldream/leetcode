/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  const len = A.length,
    odd = Array(len).fill(false),
    even = Array(len).fill(false),
    map = new Map();
  map.set(A[len - 1], len - 1);
  odd[len - 1] = true;
  even[len - 1] = true;

  for (let i = len - 2; i >= 0; i--) {
    const oddEntry = Math.min.apply(
      null,
      A.slice(i + 1).filter(item => item >= A[i])
    );
    let oddIndex = -1;
    for (let j = i + 1; j < len; j++) {
      if (oddEntry === A[j]) {
        oddIndex = j;
        break;
      }
    }

    const evenEntry = Math.max.apply(
      null,
      A.slice(i + 1).filter(item => item <= A[i])
    );
    let evenIndex = -1;
    for (let j = i + 1; j < len; j++) {
      if (evenEntry === A[j]) {
        evenIndex = j;
        break;
      }
    }

    if (oddIndex !== -1) {
      odd[i] = even[oddIndex];
    }

    if (evenIndex !== -1) {
      even[i] = odd[evenIndex];
    }
  }

  let res = 0;
  for (const item of odd) {
    if (item) {
      res++;
    }
  }
  return res;

  function findMax(arr) {
    if (arr.length === 0) {
      return arr;
    }
    const len = arr.length,
      res = Array(len),
      stack = [];
    stack.push(0);
    let index = 1;
    while (index < len) {
      while (stack.length && arr[index] > stack[stack.length - 1]) {
        res[stack.pop()] = index;
      }
      stack.push(index++);
    }
    if (stack.length) {
      res[stack.pop()] = -1;
    }
    return res;
  }
};

console.log(oddEvenJumps([10, 13, 12, 14, 15]));

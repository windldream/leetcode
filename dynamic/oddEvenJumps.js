/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  const len = A.length,
    map = {};
  let count = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (helper(A, i, true)) {
      map[i + '$' + true] = true;
      count++;
    } else {
      map[i + '$' + true] = false;
    }
  }
  return count;

  function helper(A, index, isOdd) {
    const len = A.length;
    if (index === len - 1) {
      return true;
    }
    if (map[index + '$' + isOdd] !== undefined) {
      return map[index + '$' + isOdd];
    }
    // 奇数 first
    if (isOdd) {
      let min = Infinity,
        nextIndex = -1;
      for (let i = index + 1; i < len; i++) {
        if (A[i] >= A[index]) {
          if (A[i] < min) {
            min = A[i];
            nextIndex = i;
          }
        }
      }
      if (nextIndex !== -1) {
        return helper(A, nextIndex, false);
      }
    } else {
      let max = -Infinity,
        nextIndex = -1;
      for (let i = index + 1; i < len; i++) {
        if (A[i] <= A[index]) {
          if (A[i] > max) {
            max = A[i];
            nextIndex = i;
          }
        }
      }
      if (nextIndex !== -1) {
        return helper(A, nextIndex, true);
      }
    }
    map[index + '$' + isOdd] = false;
    return false;
  }
};

console.log(oddEvenJumps([1, 2, 3, 2, 1, 4, 4, 5]));

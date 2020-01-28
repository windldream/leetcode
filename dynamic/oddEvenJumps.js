/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  const len = A.length,
    map = new Map();
  let count = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (helper(A, i, true)) {
      count++;
    }
  }
  return count;

  function helper(A, index, isOdd) {
    const len = A.length;
    if (index === len - 1) {
      map.set(index + '$' + isOdd, true);
      return true;
    }
    if (map.has(index + '$' + isOdd)) {
      return map.get(index + '$' + isOdd);
    }
    // 奇数
    if (isOdd) {
      const min = Math.min.apply(
        null,
        A.slice(index + 1).filter(item => item >= A[index])
      );
      for (let i = index + 1; i < len; i++) {
        if (A[i] === min) {
          return helper(A, i, false);
        }
      }
      map.set(index + '$' + isOdd, false);
      return false;
    } else {
      const max = Math.max.apply(
        null,
        A.slice(index + 1).filter(item => item <= A[index])
      );
      for (let i = index + 1; i < len; i++) {
        if (A[i] === max) {
          return helper(A, i, true);
        }
      }
      map.set(index + '$' + isOdd, false);
      return false;
    }
  }
};

console.log(oddEvenJumps([1, 2, 3, 2, 1, 4, 4, 5]));

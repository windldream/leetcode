/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function(A) {
  const len = A.length,
    set = new Set(),
    max = Math.max.apply(null, A);
  let mask = 1;

  while (max >= mask) {
    mask <<= 1;
  }
  mask -= 1;

  for (let i = 0; i < len; i++) {
    let temp = A[i];
    set.add(temp);
    // 当 mask 每个比特位都是 1 的时候可以停止遍历
    for (let j = i + 1; j < len && temp !== mask; j++) {
      temp = temp | A[j];
      set.add(temp);
    }
  }
  return set.size;
};

console.log(subarrayBitwiseORs([1, 2, 3]));

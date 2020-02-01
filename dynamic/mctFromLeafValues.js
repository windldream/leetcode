/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  const stack = [];
  let res = 0;
  stack.push(Infinity);

  for (let cur of arr) {
    while (stack[stack.length - 1] <= cur) {
      res += stack.pop() * Math.min(stack[stack.length - 1], cur);
    }
    stack.push(cur);
  }

  while (stack.length > 2) {
    res += stack.pop() * stack[stack.length - 1];
  }

  return res;
};

console.log(mctFromLeafValues([6, 2, 4]));

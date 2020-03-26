/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function (A) {
  const len = A.length;
  const res = [];
  let k = 0, l = 0;
  let endIndex = A.length - 1;
  while (l < len) {
    let max = -Infinity;
    let maxIndex = -1;
    for (let i = 0; i <= endIndex; i++) {
      if (A[i] > max) {
        max = A[i];
        maxIndex = i;
      }
    }
    if (maxIndex === endIndex) {
      l++;
      endIndex--;
      continue;
    }
    if (maxIndex !== 0) {
      res.push(maxIndex + 1);
      // 将未排序的最大数反转前面
      for (let i = 0; i < maxIndex / 2; i++) {
        [A[i], A[maxIndex - i]] = [A[maxIndex - i], A[i]];
      }
    }

    res.push(endIndex + 1);
    for (let i = 0; i <= endIndex / 2; i++) {
      [A[i], A[endIndex - i]] = [A[endIndex - i], A[i]];
    }
    endIndex--;
    l++;
  }
  return res;
};

console.log(pancakeSort([3, 2, 4, 1]))
// 每轮用一次翻转把未排序的煎饼中最大者翻到顶上，再用一次翻转把它翻到最终所在处（当前未排序煎饼和已排序煎饼的交界处），然后对剩余未排序煎饼重复此过程。剩下两个煎饼时只需一次翻转即完成排序。
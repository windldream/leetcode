/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
  const res = [];
  for (let i = lo; i <= hi; i++) {
    res.push(i);
  }

  res.sort((a, b) => {
    const step1 = getSteps(a);
    const step2 = getSteps(b);
    if (step1 === step2) {
      return a - b;
    }
    return step1 - step2;
  });

  return res[k - 1];

  function getSteps(num) {
    let step = 0;
    while (num !== 1) {
      step += 1;
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
    }
    return step;
  }
};

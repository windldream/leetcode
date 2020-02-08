/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
  courses.sort((a, b) => a[1] - b[1]);
  const queue = [];
  let total = 0;

  for (let c of courses) {
    if (total + c[0] <= c[1]) {
      total += c[0];
      queue.push(c);
    } else if (queue.length) {
      let [max, index] = getMax(queue);
      if (max > c[0]) {
        total += c[0] - max;
        queue.splice(index, 1);
        queue.push(c);
      }
    }
  }

  return queue.length;

  function getMax(arr) {
    let max = -Infinity,
      index = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] > max) {
        max = arr[i][0];
        index = i;
      }
    }
    return [max, index];
  }
};
console.log(
  scheduleCourse([
    [100, 200],
    [200, 1300],
    [1000, 1250],
    [2000, 3200]
  ])
);

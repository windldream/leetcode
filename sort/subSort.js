/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
  const len = array.length;
  let endLeft = -1;
  let startRight = -1;

  for (let i = 1; i < len; i++) {
    if (array[i] < array[i - 1]) {
      endLeft = i - 1;
      break;
    }
  }

  if (endLeft === -1) {
    return [-1, -1];
  }

  for (let i = len - 2; i >= 0; i--) {
    if (array[i] > array[i + 1]) {
      startRight = i + 1;
      break;
    }
  }

  let maxIndex = endLeft;
  let minIndex = startRight;

  for (let i = endLeft + 1; i < startRight; i++) {
    if (array[i] > array[maxIndex]) maxIndex = i;
    if (array[i] < array[minIndex]) minIndex = i;
  }

  let start = 0;
  for (let i = endLeft - 1; i >= 0; i--) {
    if (array[i] <= array[minIndex]) {
      start = i + 1;
      break;
    }
  }

  let end = len - 1;
  for (let i = startRight; i < len; i++) {
    if (array[i] >= array[maxIndex]) {
      end = i - 1;
      break;
    }
  }

  return [start, end];
};

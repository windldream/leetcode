/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let i = 0,
    j = 0,
    num = 1,
    res = [];

  for (let i = 0; i < n; i++) {
    res[i] = [];
  }

  while (true) {
    for (; j < n; j++) {
      if (num > n * n) {
        return res;
      }
      if (!res[i][j]) {
        res[i][j] = num++;
      } else {
        break;
      }
    }
    i++;
    j--;

    for (; i < n; i++) {
      if (num > n * n) {
        return res;
      }
      if (!res[i][j]) {
        res[i][j] = num++;
      } else {
        break;
      }
    }
    i--;
    j--;

    for (; j >= 0; j--) {
      if (num > n * n) {
        return res;
      }
      if (!res[i][j]) {
        res[i][j] = num++;
      } else {
        break;
      }
    }
    i--;
    j++;

    for (; i >= 0; i--) {
      if (num > n * n) {
        return res;
      }
      if (!res[i][j]) {
        res[i][j] = num++;
      } else {
        break;
      }
    }
    i++;
    j++;

    if (num > n * n) {
      return res;
    }

  }

  return res;
};

console.log(generateMatrix(1))
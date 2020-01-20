/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  const l = dominoes.length;
  const indexes = [],
    symbols = [];

  let len = 1;
  indexes[0] = -1;
  symbols[0] = 'L';
  for (let i = 0; i < l; i++) {
    if (dominoes[i] !== '.') {
      indexes[len] = i;
      symbols[len++] = dominoes[i];
    }
  }
  indexes[len] = l;
  symbols[len++] = 'R';

  const res = dominoes.split('');
  for (let index = 0; index < len - 1; index++) {
    const i = indexes[index],
      j = indexes[index + 1];
    const x = symbols[index],
      y = symbols[index + 1];
    if (x === y) {
      for (let k = i + 1; k < j; k++) {
        res[k] = x;
      }
    } else if (x === 'R' && y === 'L') {
      for (let k = i + 1; k < j; k++) {
        if (k - i === j - k) {
          res[k] = '.';
        } else if (k - i > j - k) {
          res[k] = 'L';
        } else {
          res[k] = 'R';
        }
      }
    }
  }

  return res.join('');
};

console.log(pushDominoes('.L.R...LR..L..'));

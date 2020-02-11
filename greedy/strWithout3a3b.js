/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let str = '',
    a = 'a',
    b = 'b';
  if (A < B) {
    [A, B] = [B, A];
    [a, b] = [b, a];
  }

  while (A > 0 || B > 0) {
    if (A > 0) {
      str += a;
      A--;
    }
    if (A > B) {
      str += a;
      A--;
    }
    if (B > 0) {
      str += b;
      B--;
    }
  }

  return str;
};

console.log(strWithout3a3b(4, 1));

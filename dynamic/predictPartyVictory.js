/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const len = senate.length,
    arr = senate.split('');
  let R = true,
    D = true,
    person = 0;

  while (R && D) {
    R = false;
    D = false;
    for (let i = 0; i < len; i++) {
      if (arr[i] === 'R') {
        R = true;
        if (person < 0) {
          arr[i] = 'O';
        }
        person++;
      } else if (arr[i] === 'D') {
        D = true;
        if (person > 0) {
          arr[i] = 'O';
        }
        person--;
      }
    }
  }

  return person > 0 ? 'Radiant' : 'Dire';
};

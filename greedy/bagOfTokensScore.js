/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
  tokens.sort((a, b) => a - b);
  const len = tokens.length;
  let score = 0,
    energy = P,
    l = 0,
    r = len - 1;

  while (l <= r) {
    if (energy >= tokens[l]) {
      energy -= tokens[l];
      score += 1;
      l++;
    } else if (score > 0) {
      energy += tokens[r] - tokens[l];
      r--;
      l++;
    } else {
      return score;
    }
  }

  return score;
};

console.log(bagOfTokensScore([100, 200, 300, 400], 200));

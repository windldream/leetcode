/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const len = s.length,
    map = {},
    lastAppearIndex = [],
    stack = [],
    aCodeAt = 'a'.charCodeAt();

  for (let i = 0; i < len; i++) {
    const c = s[i].charCodeAt() - aCodeAt;
    lastAppearIndex[c] = i;
  }

  stack.push('a');
  for (let i = 0; i < len; i++) {
    let c = s[i].charCodeAt();
    if (map[c - aCodeAt]) {
      continue;
    }

    while (
      stack[stack.length - 1].charCodeAt() > c &&
      lastAppearIndex[stack[stack.length - 1].charCodeAt() - aCodeAt] > i
    ) {
      const top = stack.pop();
      map[top.charCodeAt() - aCodeAt] = false;
    }

    stack.push(s[i]);
    map[c - aCodeAt] = true;
  }

  return stack.slice(1).join('');
};

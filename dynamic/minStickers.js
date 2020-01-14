/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
  const len = stickers.length,
    map = new Map(),
    charA = 97,
    stickersSize = [];

  map.set('', 0);
  for (let i = 0; i < len; i++) {
    stickersSize[i] = Array(26).fill(0);
    for (let j = 0; j < stickers[i].length; j++) {
      let char = stickers[i][j].charCodeAt() - charA;
      stickersSize[i][char]++;
    }
  }

  return helper(map, stickersSize, target);

  function helper(map, stickersSize, target) {
    if (map.has(target)) {
      return map.get(target);
    }

    let min = Infinity;
    const tarChar = Array(26).fill(0);
    for (let i = 0; i < target.length; i++) {
      tarChar[target[i].charCodeAt() - charA]++;
    }

    for (let i = 0; i < stickersSize.length; i++) {
      const sticker = stickersSize[i];
      if (!sticker[target[0].charCodeAt() - charA]) {
        continue;
      }

      let newTarget = '';
      for (let j = 0; j < 26; j++) {
        if (tarChar[j] > sticker[j]) {
          let str = '';
          let char = String.fromCharCode(j + charA);
          for (let s = 0; s < tarChar[j] - sticker[j]; s++) {
            str += char;
          }
          newTarget += str;
        }
      }

      const next = helper(map, stickersSize, newTarget);
      if (next !== -1) {
        min = Math.min(min, 1 + next);
      }
    }
    map.set(target, min === Infinity ? -1 : min);
    return map.get(target);
  }
};

console.log(minStickers(['with', 'example', 'science'], 'thehat'));

/**
 * @param {string[]} names
 * @param {string[]} synonyms
 * @return {string[]}
 */
var trulyMostPopular = function(names, synonyms) {
  const hashMap = new Map();

  for (const synonym of synonyms) {
    const [u, v] = synonym.replace(/[\(\)]/g, '').split(',');
    if (!hashMap.has(u)) {
      hashMap.set(u, u);
    }
    if (!hashMap.has(v)) {
      hashMap.set(v, v);
    }
    const t1 = find(u);
    const t2 = find(v);
    if (t1 === t2) continue;
    union(t1, t2);
  }

  const map = {};
  for (const item of names) {
    const [name, num] = item
      .replace('(', ',')
      .replace(')', '')
      .split(',');
    const parent = !hashMap.has(name) ? name : find(name);
    if (map[parent]) {
      map[parent] += +num;
    } else {
      map[parent] = +num;
    }
  }

  const res = [];
  for (const key in map) {
    res.push(key + '(' + map[key] + ')');
  }
  return res;

  function find(x) {
    let r = x;
    while (hashMap.get(r) !== r) {
      r = hashMap.get(r);
    }
    return r;
  }

  function union(x, y) {
    const fx = find(x);
    const fy = find(y);
    if (fx !== fy) {
      if (fx > fy) {
        hashMap.set(fx, fy);
      } else {
        hashMap.set(fy, fx);
      }
    }
  }
};

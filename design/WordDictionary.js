class TrieNode {
  constructor() {
    this.links = Array(26).fill(0);
    this.isEnd = false;
  }

  containsKey(c) {
    const key = this.getCode(c);
    return !!this.links[key];
  }

  getKey(c) {
    const key = this.getCode(c);
    return this.links[key];
  }

  setKey(c, node) {
    const key = this.getCode(c);
    this.links[key] = node;
  }

  setEnd() {
    this.isEnd = true;
  }

  getCode(c) {
    return c.charCodeAt() - "a".charCodeAt();
  }
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (const c of word) {
    if (!node.containsKey(c)) {
      node.setKey(c, new TrieNode());
    }
    node = node.getKey(c);
  }
  node.setEnd();
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  const nodes = [];
  nodes.push(this.root);

  let i = 0;
  while (nodes.length) {
    if (i === word.length) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].isEnd) {
          return true;
        }
      }
      return false;
    }
    const c = word[i];
    let hasKey = true;
    for (let len = nodes.length - 1; len >= 0; len--) {
      const node = nodes.shift();
      if (node.containsKey(c)) {
        nodes.push(node.getKey(c));
      } else if (c === ".") {
        for (let j = 0; j < 26; j++) {
          const s = String.fromCharCode(j + "a".charCodeAt());
          if (node.containsKey(s)) {
            nodes.push(node.getKey(s));
          }
        }
        if (nodes.length === 0) {
          return false;
        }
      } else {
        hasKey = false;
      }
    }
    if (!hasKey && nodes.length === 0) {
      return false;
    }
    i++;
  }

  return i === word.length;
};

const obj = new WordDictionary();
obj.addWord("a");
console.log(obj.search("a."));

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.searchPrefix = function(word) {
  let node = this.root;
  for (const c of word) {
    if (node.containsKey(c)) {
      node = node.getKey(c);
    } else {
      return null;
    }
  }
  return node;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.searchPrefix(word);
  return node != null && node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  const node = this.searchPrefix(prefix);
  return node != null;
};

class TrieNode {
  constructor() {
    this.links = Array(26).fill(0);
    this.isEnd = false;
  }

  containsKey(c) {
    const key = getCode(c);
    return !!this.links[key];
  }

  getKey(c) {
    const key = getCode(c);
    return this.links[key];
  }

  setKey(c, node) {
    const key = getCode(c);
    this.links[key] = node;
  }

  setEnd() {
    this.isEnd = true;
  }
}

function getCode(c) {
  return c.charCodeAt() - "a".charCodeAt();
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

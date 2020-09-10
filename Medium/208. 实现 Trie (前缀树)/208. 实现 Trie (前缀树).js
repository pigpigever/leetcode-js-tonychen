const TrieNode = function () {
    this.next = new Map()
    this.isEnd = false
}
/**
 * Initialize your data structure here.
 */
const Trie = function() {
    this.root = new TrieNode()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) {
        return
    }
    let { root } = this
    for (let i = 0; i < word.length; i++) {
        if (!root.next.has(word[i])) {
            root.next.set(word[i], new TrieNode())
        }
        root = root.next.get(word[i])
    }
    root.isEnd = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    const isExist = (root, index) => {
        if (index === word.length) {
            return root.isEnd
        }
        if (root.next.has(word[index])) {
            return isExist(root.next.get(word[index]), index + 1)
        }
        return false
    }
    return isExist(this.root,0)
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    const isPrefixExist = (root, index) => {
        if (index === prefix.length) {
            return true
        }
        if (root.next.has(prefix[index])) {
            return isPrefixExist(root.next.get(prefix[index]), index + 1)
        }
        return false
    }
    return isPrefixExist(this.root, 0)
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

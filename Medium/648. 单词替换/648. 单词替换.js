/**
 * TrieNode
 * @constructor
 */
function TireNode () {
    this.next = {}
    this.isEnd = false
}

/**
 * Trie
 * @constructor
 */
function Trie () {
    this.root = new TireNode()
}

/**
 * 向字典树中插入字符
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    if (!word) {
        return
    }
    let { root } = this
    for (let i = 0; i < word.length; i++) {
        if (!root.next[word[i]]) {
            root.next[word[i]] = new TireNode()
        }
        root = root.next[word[i]]
    }
    root.isEnd = true
}

/**
 * 获取指定单词的前缀
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.getPrefix = function (word) {
    const getPrefixByRecursive = (root, index) => {
        if (root.isEnd) {
            flag = true
            return ''
        }
        if (root.next[word[index]]) {
            return word[index] + getPrefixByRecursive(root.next[word[index]], index + 1)
        }
        return ''
    }
    let flag = false
    const res = getPrefixByRecursive(this.root, 0)
    return flag ? res : ''
}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dict, sentence) {
    const words = sentence.split(/\s/)
    const trie = new Trie()
    dict.forEach((word) => trie.insert(word))
    words.forEach((word, index) => {
        const replace = trie.getPrefix(word)
        if (replace && replace.length < word.length) {
            words[index] = replace && replace.length < word.length ? replace : word
        }
    })
    return words.join(' ')
}

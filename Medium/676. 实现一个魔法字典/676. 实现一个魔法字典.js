// 实现一个带有buildDict, 以及 search方法的魔法字典。
//
// 对于buildDict方法，你将被给定一串不重复的单词来构建一个字典。
//
// 对于search方法，你将被给定一个单词，并且判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
//
// 示例 1:
//
// Input: buildDict(["hello", "leetcode"]), Output: Null
// Input: search("hello"), Output: False
// Input: search("hhllo"), Output: True
// Input: search("hell"), Output: False
// Input: search("leetcoded"), Output: False
// 注意:
//
//     你可以假设所有输入都是小写字母 a-z。
//     为了便于竞赛，测试所用的数据量很小。你可以在竞赛结束后，考虑更高效的算法。
//     请记住重置MagicDictionary类中声明的类变量，因为静态/类变量会在多个测试用例中保留。 请参阅这里了解更多详情。

const TrieNode = function () {
    this.next = {}
    this.isEnd = false
}

/**
 * Initialize your data structure here.
 */
const MagicDictionary = function() {
    this.root = new TrieNode()
}

/**
 * Build a dictionary through a list of words
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    for (const word of dict) {
        let root = this.root
        for (let i = 0; i < word.length; i++) {
            if (!root.next[word[i]]) {
                root.next[word[i]] = new TrieNode()
            }
            root = root.next[word[i]]
        }
        root.isEnd = true
    }
}

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    /**
     * 判断更改一个字符之后能否在 trie 中匹配到完整的单词
     * @param {TrieNode} root
     * @param {number} targetIndex
     * @param {number} index
     * @returns {boolean|boolean|*}
     */
    const isMatch = (root, targetIndex, index) => {
        if (!root) {
            return false
        }
        if (index === word.length) {
            return root.isEnd
        }
        if (targetIndex === index) {
            let flag = ''
            if (root.next[word[index]]) {
                flag = word[index]
            }
            for (const key in root.next) {
                if (flag && key === flag) {
                    continue
                }
                if (isMatch(root.next[key], targetIndex, index + 1)) {
                    return true
                }
            }
            return false
        }
        if (root.next[word[index]]) {
            return isMatch(root.next[word[index]], targetIndex, index + 1)
        }
        return false
    }
    for (let i = 0; i < word.length; i++) {
        if (isMatch(this.root, i, 0)) {
            return true
        }
    }
    return false
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

/**
 * Initialize your data structure here.
 */
const WordDictionary = function() {
    this.next = {}
    this.isEnd = false
}

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let self = this
    for (let i = 0; i < word.length; i++) {
        if (!self.next[word[i]]) {
            self.next[word[i]] = {
                next: {},
                isEnd: false
            }
        }
        self = self.next[word[i]]
    }
    self.isEnd = true
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const isMath = (self, index) => {
        if (index === word.length) {
            return self.isEnd
        }
        if (self.next[word[index]]) {
            return isMath(self.next[word[index]], index + 1)
        }
        if (word[index] === '.') {
            for (const key in self.next) {
                if (isMath(self.next[key], index + 1)) {
                    return true
                }
            }
        }
        return false
    }
    return isMath(this, 0)
}

const obj = new WordDictionary()
obj.addWord('a')
obj.addWord('ab')
obj.addWord('a')
console.log(obj.search('a.'))


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

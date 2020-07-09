/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
const findLadders = function(beginWord, endWord, wordList) {
    const isValid = (curr, next) => {
        if (curr === next) {
            return true
        }
        let flag = 0
        for (let i = 0; i < curr.length; i++) {
            if (curr[i] !== next[i]) {
                flag++
            }
            if (flag > 1) {
                return false
            }
        }
        return true
    }
    const helper = (beginWord, path) => {
        if (res.length) {
            return
        }
        if (beginWord === endWord) {
            res = path
            return
        }
        for (let i = 0; i < wordList.length; i++) {
            if (map.has(wordList[i])) {
                continue
            }
            if (isValid(beginWord, wordList[i])) {
                map.set(wordList[i], true)
                helper(wordList[i], [...path, wordList[i]])
            }
        }
    }
    const map = new Map()
    let res = []
    map.set(beginWord, true)
    helper(beginWord, [beginWord])
    return res
};

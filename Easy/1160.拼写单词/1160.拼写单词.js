/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    function getHashMap (strs) {
        let map = new Map()
        for (const str of strs) {
            if (map.has(str)) {
                map.set(str, map.get(str) + 1)
            } else {
                map.set(str, 1)
            }
        }
        return map
    }
    let sum = 0, charsMap = getHashMap(chars)
    for (const word of words) {
        let wordMap = getHashMap(word), flag = true
        for (let [key, value] of wordMap) {
            if (!charsMap.has(key) || charsMap.get(key) < value) {
                flag = false
                break
            }
        }
        sum += flag ? word.length : 0
    }
    return sum
};


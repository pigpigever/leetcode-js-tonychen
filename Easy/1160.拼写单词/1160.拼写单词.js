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
    function init () {
        map.clear()
        for (const char of chars) {
            if (map.has(char)) {
                map.set(char, map.get(char) + 1)
            } else {
                map.set(char, 1)
            }
        }
    }
    let map = new Map(), sum = 0
    for (const word of words) {
        init()
        let flag = true
        for (let i = 0; i < word.length; i++) {
            if (map.has(word[i])) {
                if (map.get(word[i]) <= 0) {
                    flag = false
                    break
                } else {
                    map.set(word[i], map.get(word[i]) - 1)
                }
            } else {
                flag = false
                break
            }
        }
        if (flag) {
            sum += word.length
        }
    }
    return sum
};


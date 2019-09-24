/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const ans = []
    text = text.trim().split(/\s+/)
    for (let i = 0; i < text.length; i++) {
        if (text[i] === second
            && i - 1 >= 0
            && i + 1 < text.length
            && text[i - 1] === first) {
            ans.push(text[i + 1])
        }
    }
    return ans
};


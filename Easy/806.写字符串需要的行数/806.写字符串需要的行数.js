/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */
/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let line = 1, rest = 0, maxWidth = 100
    for (let i = 0; i < S.length; i++) {
        let width = widths[S.charAt(i).charCodeAt() - 97]
        if (rest > maxWidth) {
            rest = rest % maxWidth
            line++
        } else if (rest + width > maxWidth) {
            rest = width
            line++
        } else {
            rest += width
        }
    }
    return [ line, rest ]
};


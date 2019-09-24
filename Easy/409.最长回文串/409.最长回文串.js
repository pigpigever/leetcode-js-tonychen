/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map(), len = s.length, ans = 0
    for (let i = 0; i < len; i++) {
        const val = map.get(s.charAt(i))
        map.set(s.charAt(i), val ? val + 1 : 1)
    }
    for (let [key, value] of map) {
        ans += Math.floor(value >> 1) * 2 
    }
    return len > ans ? ans + 1 : ans
};


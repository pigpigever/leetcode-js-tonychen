/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    if (!pattern || !str) {
        return false
    }
    let pMap = new Map(), sMap = new Map()
    str = str.split(/\s+/)
    for (let i = 0; i < str.length; i++) {
        sMap.set(str[i], pattern[i])
    }
    for (let i = 0; i < pattern.length; i++) {
        pMap.set(pattern[i], str[i])
    }
    for (let i = 0; i < pattern.length; i++) {
        if (pMap.get(pattern[i]) !== str[i] || sMap.get(str[i]) !== pattern[i]) {
            return false
        }
    }
    return true
};


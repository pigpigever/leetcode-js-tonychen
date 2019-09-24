/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    function createHashTable (words, others) {
        let map = new Map()
        for (let i = 0; i < words.length; i++) {
            map.set(words[i], others[i])
        }
        return map
    }
    let sMap = createHashTable(s, t),
        tMap = createHashTable(t, s)
    for (let i = 0; i < s.length; i++) {
        if (t[i] !== sMap.get(s[i])) {
            return false
        } else if (s[i] !== tMap.get(t[i])) {
            return false
        }
    }
    return true
};


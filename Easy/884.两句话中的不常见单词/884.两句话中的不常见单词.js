/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let mapA = createHashMap(A)
    let mapB = createHashMap(B)

    return getUncommonWords(mapA, mapB)

    function getUncommonWords (mapA, mapB) {
        let ans = []
        for (let [key, value] of mapA) {
            if (value === 1 && !mapB.has(key)) {
                ans.push(key)
            }
        }
        for (let [key, value] of mapB) {
            if (value === 1 && !mapA.has(key)) {
                ans.push(key)
            }
        }
        return ans
    }
    
    function createHashMap (words) {
        words = words.trim().split(/\s+/)
        let map = new Map()
        for (const word of words) {
            if (map.has(word)) {
                map.set(word, map.get(word) + 1)
            } else {
                map.set(word, 1)
            }
        }
        return map
    }
};


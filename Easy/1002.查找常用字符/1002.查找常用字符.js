/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let mapArray = [], ans = []
    for (const words of A) {
        let map = new Map()
        for (const word of words) {
            const val = map.get(word)
            map.set(word, val ? val + 1 : 1)
        }
        mapArray.push(map)
    }
    let top = mapArray.shift()
    for (let [key, value] of top) {
        let min = value
        for (const map of mapArray) {
            min = Math.min(min, map.get(key))
        }
        for (let i = 0; i < min; i++) {
            ans.push(key)
        }
    }
    return ans
};


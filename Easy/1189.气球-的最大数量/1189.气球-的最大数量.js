/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = new Map(), target = 'balon', balloon = 'balloon'
    for (const key of target) {
        map.set(key, 0)
    }
    for (const t of text) {
        if (map.has(t)) {
            map.set(t, map.get(t) + 1)
        }
    }
    let ans = Number.MAX_SAFE_INTEGER
    for (let [key, value] of map) {
        let tmp = 0
        if (key === 'l' || key === 'o') {
            tmp = Math.floor(map.get(key) / 2)
        } else {
            tmp = map.get(key)
        }
        ans = Math.min(ans, tmp)
    }
    return ans
};


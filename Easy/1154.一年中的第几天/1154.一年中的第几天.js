/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const time = date.split('-')
    const isRunYear = time[0] % 400 === 0 || (time[0] % 4 === 0 && time[0] % 100 !== 0)
    const month = [ 0, 31, isRunYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
    let sum = 0
    for (let i = 1; i < time[1]; i++) {
        sum += month[i]
    }
    return sum + parseInt(time[2])
};


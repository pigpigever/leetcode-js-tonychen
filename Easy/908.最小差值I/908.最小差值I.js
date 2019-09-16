/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    const min = Math.min(...A)
    const max = Math.max(...A)

    return 2 * K > max - min ? 0 : (max - min) - 2 * K
};


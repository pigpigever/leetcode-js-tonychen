/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let len = A.length
    let diff = A[len - 1] - A[0]
    for (let i = 1; i < len; i++) {
        if (diff >= 0 && A[i] - A[i - 1] < 0) {
            return false
        }
        if (diff <= 0 && A[i] - A[i - 1] > 0) {
            return false
        }
    }
    return true
};


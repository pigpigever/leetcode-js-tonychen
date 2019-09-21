/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix.length
    let start = 0, end = length - 1
    while (length > 0) {
        for (let i = start, j = 0; i < end && j < end; i++, j++) {
            swap(start, end, i, j)
        }
        length -= 2
        start++, end--
    }
    function swap (start, end, i, j) {
        let first = matrix[i][end]
        matrix[i][end] = matrix[start][i]
        let second = matrix[end][end - j]
        matrix[end][end - j] = first
        let third = matrix[end - j][start]
        matrix[end - j][start] = second
        matrix[start][i] = third
    }
};

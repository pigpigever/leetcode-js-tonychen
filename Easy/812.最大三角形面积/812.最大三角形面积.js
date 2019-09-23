/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let max = 0, len = points.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                let area = Math.abs((points[i][0] * points[j][1] - points[i][1] * points[j][0])
                                 + (points[j][0] * points[k][1] - points[k][0] * points[j][1])
                                 + (points[k][0] * points[i][1] - points[i][0] * points[k][1])) / 2
                max = Math.max(max, area)
            }
        }
    }
    return max
};


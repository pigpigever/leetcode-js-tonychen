/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    const helper = (i, j) => {
        if (i < 0 || j >= col) {
            return false
        }
        if (matrix[i][j] === target) {
            return true
        }
        if (matrix[i][j] > target) {
            return helper(i - 1, j)
        }
        return helper(i, j + 1)
    }
    if (!matrix.length) {
        return false
    }
    const row = matrix.length
    const col = matrix[0].length
    return helper(row - 1, 0)
}

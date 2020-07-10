/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    const helper = (i, j) => {
        const key = `${i}-${j}`
        if (i >= row || j >= col || map.has(key)) {
            return false
        }
        map.set(key, true)
        if (matrix[i][j] === target) {
            return true
        }
        if (matrix[i][j] > target) {
            return false
        }
        return helper(i + 1, j) || helper(i, j + 1)
    }
    if (!matrix.length) {
        return false
    }
    const row = matrix.length
    const col = matrix[0].length
    const map = new Map()
    return helper(0, 0)
}

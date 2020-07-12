/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false
    }
    const row = matrix.length
    const col = matrix[0].length
    let start = 0
    let end = row * col - 1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const currRow = Math.floor(mid / col)
        const currCol = Math.floor(mid - currRow * col)
        if (matrix[currRow][currCol] === target) {
            return true
        }
        if (matrix[currRow][currCol] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
}

console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]], 13))

// [1,   3,  5,  7, 10, 11, 16, 20, 23, 30, 34, 50]

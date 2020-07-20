/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const map = new Map()
    const row = board.length
    const col = board[0].length
    // 检查同一列上是否有相同的值
    for (let j = 0; j < col; j++) {
        for (let i = 0; i < row; i++) {
            const key = `${j}-col`
            if (map.has(key)) {
                return false
            }
            map.set(key, board[i][j])
        }
    }
    // 检查同一行上是否有相同的值
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const key = `${i}-row`
            if (map.has(key)) {
                return false
            }
            map.set(key, board[i][j])
        }
    }
    // 检查 3 x 3 的宫格
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const key = `${i % 3}-${j % 3}`
            if (map.has(key)) {
                return false
            }
            map.set(key, board[i][j])
        }
    }
    return true
};
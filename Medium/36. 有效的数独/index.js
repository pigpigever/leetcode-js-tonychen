/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const rowMap = new Map()
    const colMap = new Map()
    const boxMap = new Map()
    const row = board.length
    const col = board[0].length

    const getBoxRange = (i, j) => {
        if (i / 3 < 1) {
            if (j / 3 < 1) return [0, 0]
            if (j / 3 < 2) return [0, 3]
            return [0, 6]
        }
        if (i / 3 < 2) {
            if (j / 3 < 1) return [3, 0]
            if (j / 3 < 2) return [3, 3]
            return [3, 6]
        }
        if (j / 3 < 1) return [6, 0]
        if (j / 3 < 2) return [6, 3]
        return [6, 6]
    }

    const checkRow = (i, j) => {
        const duplicate = new Map()
        if (rowMap.has(i)) {
            return true
        }
        for (let k = 0; k < row; k++) {
            if (duplicate.has(board[i][k]) && board[i][k] !== '.') {
                return false
            }
            duplicate.set(board[i][k], true)
        }
        rowMap.set(i, true)
        return true
    }

    const checkCol = (i, j) => {
        const duplicate = new Map()
        if (colMap.has(j)) {
            return true
        }
        for (let k = 0; k < col; k++) {
            if (duplicate.has(board[k][j]) && board[k][j] !== '.') {
                return false
            }
            duplicate.set(board[k][j], true)
        }
        colMap.set(j, true)
        return true
    }

    const checkBox = (i, j) => {
        const duplicate = new Map()
        const [rowStart, colStart] = getBoxRange(i, j)
        if (boxMap.has(`${rowStart}${colStart}`)) {
            return true
        }
        for (let k = rowStart; k < rowStart + 3; k++) {
            for (let l = colStart; l < colStart + 3; l++) {
                if (duplicate.has(board[k][l]) && board[k][l] !== '.') {
                    return false
                }
                duplicate.set(board[k][l], true)
            }
        }
        boxMap.set(`${rowStart}${colStart}`, true)
        return true
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (!checkRow(i, j)) {
                return false
            }
            if (!checkCol(i, j)) {
                return false
            }
            if (!checkBox(i, j)) {
                return false
            }
        }
    }
    return true
};

module.exports = isValidSudoku
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const helper = (i, j, index) => {
        if (index === word.length) {
            return true
        }
        if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word[index] || visited[i][j]) {
            return false
        }
        visited[i][j] = true
        for (let k = 0; k < 4; k++) {
            if (helper(i + direction[k][0], j + direction[k][1])) {
                return true
            }
        }
        visited[i][j] = false
        return false
    }
    const row = board.length
    const col = board[0].length
    const direction = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    const visited = new Array(row).fill(false).map(() => new Array(col).fill(false))
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (helper(i, j, 0)) {
                return true
            }
        }
    }
    return false
};
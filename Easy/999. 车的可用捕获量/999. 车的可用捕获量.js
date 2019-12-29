/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const findRook = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 'R') {
                    return {
                        i, j
                    }
                }
            }
        }
    }
    const dfs = (i, j, x, y) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length ) {
            return 0
        }
        if (board[i][j] === 'B') {
            return 0
        }
        if (board[i][j] === 'p') {
            return 1
        }
        return dfs(i + x, j + y, x, y)
    }
    const {  i, j } = findRook()
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let count = 0
    for (let x = 0; x < 4; x++) {
        count += dfs(i, j, dir[x][0], dir[x][1])
    }
    return count
};
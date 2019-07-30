/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let x = grid.length - 1, y = grid[0].length - 1
    for (let i = 0; i <= x; i++) {
        for (let j = 0; j <= y; j++) {
            if (j === 0) {
                if (i > 0) {
                    grid[i][j] = grid[i - 1][j] + grid[i][j]
                }
            } else {
                if (i > 0) {
                    grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j])
                } else {
                    grid[i][j] = grid[i][j - 1] + grid[i][j]
                }
            }
        }
    }
    return grid[x][y]
};
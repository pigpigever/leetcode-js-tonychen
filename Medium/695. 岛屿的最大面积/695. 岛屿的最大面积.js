/**
 * @param {number[][]} grid
 * @return {number}
 */

/* [[1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,0,1,1,1]]
*/
var maxAreaOfIsland = function(grid) {
    const search = (x, y) => {
        if (x === grid.length || y === grid[0].length) {
            return
        }
        if (grid[x][y] === 0) {
            return
        }
        area++
        map[x][y] = true
        // 往上边
        if (x - 1 >= 0 && !map[x - 1][y]) {
            search(x - 1, y)
        }
        // 往下边
        if (x + 1 < grid.length && !map[x + 1][y]) {
            search(x + 1, y)
        }
        // 往左找
        if (y - 1 >= 0 && !map[x][y - 1]) {
            search(x, y - 1)
        }
        // 往右找
        if (y + 1 < grid[0].length && !map[x][y + 1]) {
            search(x, y + 1)
        }
        maxArea = Math.max(maxArea, area)
        area = 0
    }
    let area = 0
    let maxArea = 0
    let map = []
    for (let i = 0; i < grid.length; i++) {
        map[i] = []
        for (let j = 0; j < grid[i].length; j++) {
            map[i][j] = false
        }
    }
    search(0, 0)
    console.log(maxArea)
    return maxArea
};

maxAreaOfIsland( [[1,1,0,0,0],
                       [1,1,0,0,0],
                       [0,0,0,1,1],
                       [0,0,1,1,1]])

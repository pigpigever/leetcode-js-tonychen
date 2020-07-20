/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
    const helper = (i, j) => {
        if (i < 0 || i >= row || j < 0 || j >= col || maze[i][j] === -1) {
            return false
        }
        // 如果走到了目的地那就返回 true
        if (i === destination[0] && j === destination[1]) {
            return true
        }
        maze[i][j] = -1
        for (let k = 0; k < 4; k++) {
            let nextRow = i + directions[k][0]
            let nextCol = j + directions[k][1]
            while (nextRow >= 0 && nextRow < row && nextCol >= 0 && nextCol < col && maze[nextRow][nextCol] !== 1) {
                nextRow += directions[k][0]
                nextCol += directions[k][1]
            }
            if (helper(nextRow - directions[k][0], nextCol - directions[k][1])) {
                return true
            }
        }
        return false
    }
    if (!maze.length) {
        return false
    }
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const row = maze.length
    const col = maze[0].length
    return helper(start[0], start[1], 0)
};

console.log(
    hasPath([
        [ 0, 0, 0, 0, 1, 0, 0 ],
        [ 0, 0, 1, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1 ],
        [ 0, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 0, 0, 0, 1 ],
        [ 0, 0, 0, 0, 1, 0, 0 ]],
        [0,0],
        [8,6]
    )
)
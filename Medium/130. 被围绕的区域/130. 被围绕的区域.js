/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {

    const visited = new Map();
    const row = board.length;
    const col = board[0].length;
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const findAroundArea = (posX, posY, marked) => {
        if (posX < 0 || posX >= row || posY < 0 || posY >= col) {
            return true;
        }
        const key = `${posX}-${posY}`;
        if (board[posX][posY] === 'X' || visited.has(key)) {
            return false;
        }
        visited.set(key, true);
        marked.set(key, true);
        let flag = false;
        for (let i = 0; i < dir.length; i++) {
            const res = findAroundArea(posX + dir[i][0], posY + dir[i][1], marked);
            flag = flag ? flag : res;
        }
        return flag;
    };

    const fillBoard = (marked) => {
        for (const [key] of marked) {
            const [posX, posY] = key.split('-');
            board[posX][posY] = 'X';
        }
    };

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'O') {
                const marked = new Map();
                if (!visited.has(`${i}-${j}`) && !findAroundArea(i, j, marked)) {
                    fillBoard(marked);
                }
            }
        }
    }
};

// solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])
// solve([["X"]])
// solve([
//     ["O", "O", "O", "O", "X", "X"],
//     ["O", "O", "O", "O", "O", "O"],
//     ["O", "X", "O", "X", "O", "O"],
//     ["O", "X", "O", "O", "X", "O"],
//     ["O", "X", "O", "X", "O", "O"],
//     ["O", "X", "O", "O", "O", "O"]]
// );

solve(
    [
        ["X", "O", "O", "X", "X", "X", "O", "X", "O", "O"],
        ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "O", "X", "X", "X", "X", "X"],
        ["X", "O", "X", "X", "X", "O", "X", "X", "X", "O"],
        ["O", "X", "X", "X", "O", "X", "O", "X", "O", "X"],
        ["X", "X", "O", "X", "X", "O", "O", "X", "X", "X"],
        ["O", "X", "X", "O", "O", "X", "O", "X", "X", "O"],
        ["O", "X", "X", "X", "X", "X", "O", "X", "X", "X"],
        ["X", "O", "O", "X", "X", "O", "X", "X", "O", "O"],
        ["X", "X", "X", "O", "O", "X", "O", "X", "X", "O"]]
);

// [
//     ["X","O","O","X","X","X","O","X","O","O"],
//     ["X","O","X","X","X","X","X","X","X","X"],
//     ["X","X","X","X","X","X","X","X","X","X"],
//     ["X","X","X","X","X","X","X","X","X","O"],
//     ["O","X","X","X","X","X","X","X","X","X"],
//     ["X","X","X","X","X","X","X","X","X","X"],
//     ["O","X","X","X","X","X","X","X","X","O"],
//     ["O","X","X","X","X","X","X","X","X","X"],
//     ["X","X","X","X","X","X","X","X","O","O"],
//     ["X","X","X","O","O","X","O","X","X","O"]]

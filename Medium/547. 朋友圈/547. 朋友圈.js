/**
 * @param {number[][]} M
 * @return {number}
 */
const findCircleNum = function(M) {
    /**
     * @method getCircleNum
     * @param {number} i
     * @param {number} j
     * @return {void}
     */
    const getCircleNum = (i, j) => {
        if (i >= ROW || j >= COL) {
            return
        }
        if (M[i][j] === 1) {
            M[i][j] = 0
            for (let k = 0; k < COL; k++) {
                getCircleNum(i, k)
            }
            for (let k = 0; k < ROW; k++) {
                getCircleNum(k, j)
            }
        }
    }
    if (!M.length) {
        return 0
    }
    const ROW = M.length
    const COL = M[0].length
    let cnt = 0
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (M[i][j] === 1) {
                cnt++
                getCircleNum(i, j)
            }
        }
    }
    return cnt
}

findCircleNum(
[[1,0,0,1],
     [0,1,1,0],
     [0,1,1,1],
     [1,0,1,1]])
findCircleNum(
[[1,1,0],
    [1,1,0],
    [0,0,1]])
findCircleNum(
[[1,1,0],
    [1,1,1],
    [0,1,1]]
)

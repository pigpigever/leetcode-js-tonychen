/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
    const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    let rowStart = 0
    let rowEnd = n - 1
    let colStart = 0
    let colEnd = n - 1
    let i = 0
    let j = 0
    let cnt = 1
    while (cnt <= n * n) {
        while (j <= colEnd) {
            res[i][j++] = cnt++
        }
        i++
        j = colEnd
        rowStart++
        while (i <= rowEnd) {
            res[i++][j] = cnt++
        }
        j--
        i = rowEnd
        colEnd--
        while (j >= colStart)  {
            res[i][j--] = cnt++
        }
        i--
        j = colStart
        rowEnd--
        while (i >= rowStart) {
            res[i--][j] = cnt++
        }
        j++
        i = rowStart
        colStart++
    }
    return res
}

generateMatrix(4)

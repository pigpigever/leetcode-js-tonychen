// 给定一幅黑白像素组成的图像, 计算黑色孤独像素的数量。

// 图像由一个由‘B’和‘W’组成二维字符数组表示, ‘B’和‘W’分别代表黑色像素和白色像素。

// 黑色孤独像素指的是在同一行和同一列不存在其他黑色像素的黑色像素。

// 示例:

// 输入:
// [['W', 'W', 'B'],
//  ['W', 'B', 'W'],
//  ['B', 'W', 'W']]

// 输出: 3
// 解析: 全部三个'B'都是黑色孤独像素。

/**
 * @param {string[][]} picture
 * @return {number}
 */
const findLonelyPixel = function(picture) {
    /**
     * 判断是否是孤独像素
     * @param {number} i
     * @param {number} j
     * @param {object} { x, y }
     * @return {boolean}
     */
    const isLonelyPixel = (i, j, { x, y }) => {
        if (i < 0 || i >= ROW || j < 0 || j >= COL) {
            return true
        }
        if (picture[i][j] === 'B') {
            return false
        }
        return isLonelyPixel(i + x, j + y, { x, y })
    }
    if (!picture.length) {
        return 0
    }
    const ROW = picture.length
    const COL = picture[0].length
    const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const notLonelyPixelsInRow = new Array(ROW).fill(false)
    const notLonelyPixelsInCol = new Array(COL).fill(false)
    let cnt = 0
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            // 如果这一行/列被搜索过且不存在孤独像素
            // 那么下次遇到它就不用再看了
            if (notLonelyPixelsInRow[i] || notLonelyPixelsInCol[j]) {
                continue
            }
            if (picture[i][j] === 'B') {
                let flag = true
                // 搜索同一行同一列的其他像素是否存在 'B'
                for (let k = 0; k < DIR.length; k++) {
                    const [ x, y ] = DIR[k]
                    if (!isLonelyPixel(i + x, j + y, { x, y })) {
                        flag = false
                        break
                    }
                }
                if (flag) {
                    cnt++
                } else {
                    // 标记非孤独像素的行列
                    notLonelyPixelsInRow[i] = true
                    notLonelyPixelsInCol[j] = true
                }
            }
        }
    }
    return cnt
}

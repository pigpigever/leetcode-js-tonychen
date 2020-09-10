/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const helper = (i, j) => {
        if (i < 0 || i >= ROW || j < 0 || j >= COL) {
            return
        }
        if (image[i][j] === newColor || image[i][j] !== target) {
            return
        }
        image[i][j] = newColor
        for (let k = 0; k < DIRS.length; k++) {
            helper(i + DIRS[k][0], j + DIRS[k][1])
        }
    }
    if (!image.length) {
        return []
    }
    const ROW = image.length
    const COL = image[0].length
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const target = image[sr][sc]
    helper(sr, sc)
    return image
}

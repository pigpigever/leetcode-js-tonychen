/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    const fill = (i, j) => {
        if (i < 0 || i >= ROW || j < 0 || j >= COL) {
            return
        }
        if (target === image[i][j] && target !== newColor) {
            image[i][j] = newColor
            for (let k = 0; k < DIR.length; k++) {
                fill(i + DIR[k][0], j + DIR[k][1])
            }
        }
    }
    if (!image.length) {
        return []
    }
    const DIR = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const ROW = image.length
    const COL = image[0].length
    const target = image[sr][sc]
    fill(sr, sc)
    return image
}

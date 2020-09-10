/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
const powerfulIntegers = function(x, y, bound) {
    const res = []
    const map = new Map()
    for (let i = 1; i < bound; i *= x) {
        for (let j = 1; i + j <= bound; j *= y) {
            if (!map.has(i + j)) {
                res.push(i + j)
                map.set(i + j, true)
            }
            if (y === 1) {
                break
            }
        }
        if (x === 1) {
            break
        }
    }
    return res
}

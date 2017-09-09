/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    let result = [], temp = [], map = []
    nums.forEach(item => {
        map.push(...item)
    })
    if (r * c !== map.length) {
        return nums
    }
    for (let i = 0; i < r; i++) {
        temp = []
        for (let j = 0; j < c; j++) {
            temp.push(map[0])
            map.shift()
        }
        result.push(temp)
    }
    return result
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const res = []
    while (left <= right) {
        const isSelfDivNum = left.toString().split('').every((num) => left % parseInt(num) === 0)
        if (isSelfDivNum) {
            res.push(left)
        }
        left++
    }
    return res
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, res = 0
    for (const num of nums) {
        if (num === 1) {
            count++
        } else {
            count = 0
        }
        res = Math.max(res, count)
    }
    return res
};
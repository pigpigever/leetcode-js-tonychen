/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
    if (nums.length <= 1) {
        return nums.join('')
    }
    nums.sort((a, b) => {
        const first = a + '' + b
        const second = b + '' + a
        return second - first
    })
    if (nums[0] === 0) {
        return '0'
    }
    return nums.join('')
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
    let steps = 0
    let end = 0
    let maxPosition = 0
    for (let i = 0; i < nums.length; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (i === end) {
            end = maxPosition
            steps++
        }
    }
    return steps
};

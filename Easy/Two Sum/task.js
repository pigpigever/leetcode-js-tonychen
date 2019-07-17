/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}

    for (let i = 0, len = nums.length; i < len; i++) {
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        }
        map[target - nums[i]] = i
    }
}

console.log(twoSum([ 1,2,3,4,5 ], 3))

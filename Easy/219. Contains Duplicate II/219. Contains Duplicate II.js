/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            if (i - map[nums[i]] === k) {
                return true
            } else if (i - map[nums[i]] > k) {
                map[nums[i]] = i
            }
        } else {
            map[nums[i]] = i
        }
    }
    return false
};

console.log(containsNearbyDuplicate([1,0,1,1], 1))
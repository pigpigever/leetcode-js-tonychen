/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = Array.from(new Set(nums))
    if(map.length === nums.length){
        return false
    }
    return true
};
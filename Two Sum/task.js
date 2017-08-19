/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i in nums){
        if(map[nums[i]] !== undefined){
            return [parseInt(map[nums[i]]), parseInt(i)];
        }else{
            map[target - nums[i]] = i
        }   
    }
}

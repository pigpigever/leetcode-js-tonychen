/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var sum=0;
    nums.sort(function(a,b){
        return a-b;
    });
    for(var i=0;i<nums.length;i+=2){
        sum+=nums[i];
    }
    return sum;
};
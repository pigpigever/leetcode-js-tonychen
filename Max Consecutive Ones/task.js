/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var counter=0,max=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]){
            counter++;
        }
        else{
            max=max>counter?max:counter;
            counter=0;
        }
    }
    max=max>counter?max:counter;
    return max;
};
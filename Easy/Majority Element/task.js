/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = 0,prev 
    nums.sort((a,b)=>(a-b))
    prev = nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i] === prev){
            counter ++
        }else{
            counter = 1
        }
        prev = nums[i]
        if(counter > nums.length / 2){
            return nums[i]
        }
    }
};

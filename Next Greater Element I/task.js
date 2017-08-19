/**
     * @param {number[]} findNums
     * @param {number[]} nums
     * @return {number[]}
     */
    var nextGreaterElement = function(findNums, nums) {
        var result=[];
        for(var i=0;i<findNums.length;i++){
            var tag=undefined,isTrue=false;
            for(var j=0;j<nums.length;j++){
                if(findNums[i]==nums[j]){
                    tag=j;
                    break;
                }
            }
            if(tag!==undefined){
                for(var j=tag+1;j<nums.length;j++){
                    if(findNums[i]<nums[j]){
                        result.push(nums[j]);
                        isTrue=true;
                        break;
                    }
                }
                if(!isTrue){result.push(-1)};
            }
            else{
                result.push(-1);
            }
        }
        return result;
    };
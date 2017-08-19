    /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result=[];
    nums.sort(function(a,b){
        return a-b;
    });
    //数组去重
    var gg=new Set(nums);
    var ggData=gg.values();
    var temp=ggData.next().value;
    for(var i=1;i<=nums.length;i++){
        if(temp!=i){
            result.push(i);
        }
        else{
            temp=ggData.next().value;
        }
    }
    return result;
};


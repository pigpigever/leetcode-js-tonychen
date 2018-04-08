/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var dic=new Set();
    for(var i=0;i<candies.length;i++){
        dic.add(candies[i]);
    }
    if(dic.size>=candies.length/2){
        return candies.length/2;
    }
    else{
        return dic.size;
    }
};
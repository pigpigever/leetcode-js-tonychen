/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var result=(x^y).toString(2),count=0;
    for(var i=0;i<result.length;i++){
        if(result[i]=='1'){
            count++;
        }
    }
    return count;
}
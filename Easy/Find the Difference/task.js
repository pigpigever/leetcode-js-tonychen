/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sArray=s.split('').sort();
    var tArray=t.split('').sort();
    for(var i=0;i<s.length;i++){
        if(sArray[i]!==tArray[i]){
            return tArray[i];
        }
    }
    return tArray[tArray.length-1];
};
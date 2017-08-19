/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(var i=0;i<s.length;i++){
        var tag=true
        for(var j=0;j<s.length;j++){
            if(s[i]==s[j]&&i!==j){
                tag=false;
                break;
            }
        }
        if(tag){
            return i;
        }
    }
    return -1;
};
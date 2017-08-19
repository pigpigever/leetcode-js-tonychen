/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var s='ZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result=[],gg="";
    while(n>26){
        result.push(n%26);
        if(n%26==0){
            n--;
        }
        n=parseInt(n/26);
    }
    result.push(n);
    for(var i=0;i<result.length;i++){
        gg+=s[result[i]];
    }
    return gg.split("").reverse().join("");
};
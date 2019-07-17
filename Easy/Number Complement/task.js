/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var a=num.toString(2),b='';
    for(var i=0;i<a.length;i++){
        if(a[i]=='1'){
            b+='0';
        }
        else{
            b+='1';
        }
    }
    return parseInt(b,2);
};
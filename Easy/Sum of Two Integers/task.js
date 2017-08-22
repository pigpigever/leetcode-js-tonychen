/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var sum=a;
    while(b!=0){
        sum=a^b;
        b=(a&b)<<1;
        a=sum;
    }
    return sum;
};
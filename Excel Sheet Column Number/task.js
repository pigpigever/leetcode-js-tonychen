/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let map = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
        sum = 0
    for(let i=0;i<s.length;i++){
        sum += Math.pow(26,s.length-i-1) * list[map.indexOf(s[i])]
    }
    return sum
};
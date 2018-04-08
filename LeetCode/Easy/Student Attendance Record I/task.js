/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let i = 0,A = 0,L = 0
    while(i < s.length){
        if(s[i] == 'A'){
            A ++, L = 0
        }else if(s[i] == 'P'){
            L =0
        }else{
            L ++
        }
        if(A >= 2 || L >= 3){
            return false
        }
        i++
    }
    return true
};
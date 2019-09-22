/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let flag = 0, i = s.length - 1
    
    while (i >= 0) {
        if (s.charAt(i) === ' ') {
            if (flag) {
                return flag
            }
        } else {
            flag++
        }
        i--
    }
    return flag
};
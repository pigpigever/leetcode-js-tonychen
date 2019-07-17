/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let flag = 0, i = s.length - 1
    
    while (i >= 0) {
        if (s[i] === ' ') {
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

console.log(lengthOfLastWord('hello world'))

// 输入: "Hello World"
// 输出: 5
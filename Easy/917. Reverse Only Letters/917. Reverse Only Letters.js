/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let i = 0, j = s.length - 1, reg = /[a-zA-Z]/
    while (i < j) {
        if (reg.test(s.charAt(i)) && reg.test(s.charAt(j))) {
            s = s.substring(0, i) + s.charAt(j) + s.substring(i + 1, j) + s.charAt(i) + s.substring(j + 1, s.length)
            i++, j--
        }
        while (i < j && !reg.test(s.charAt(i))) i++
        while (i < j && !reg.test(s.charAt(j))) j--
    }
    return s
};
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            res += String.fromCharCode(str.charCodeAt(i) + 32)
        } else {
            res += str.charAt(i)
        }
    }
    return res
};
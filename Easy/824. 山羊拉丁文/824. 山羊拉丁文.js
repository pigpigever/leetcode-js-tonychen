/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(s) {
    let ans = '', offset = 'a', start = 0, reg = /[aeiouAEIOU]/
    for (let i = 1; i < s.length; i++) {
        if (s.charAt(i) === ' ' || i === s.length - 1) {
            let end = i === s.length - 1 ? i + 1 : i
            if (reg.test(s.charAt(start))) {
                ans += s.substring(start, end) + 'ma' + offset
            } else {
                ans += s.substring(start + 1, end) + s.charAt(start) + 'ma' + offset
            }
            offset += 'a'
            start = i + 1
            ans += i === s.length - 1 ? '' : ' '
        }        
    }
    return ans
};
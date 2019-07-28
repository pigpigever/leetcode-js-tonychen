/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0, j = s.length - 1
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return judge(i + 1, j) || judge(i, j - 1)
        }
        i++, j--
    }
    return true
    function judge (i, j) {
        while (i < j) {
            if (s.charAt(i) !== s.charAt(j)) {
                return false
            }
            i++, j--
        }
        return true
    }
};
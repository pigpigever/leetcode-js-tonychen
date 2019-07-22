/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i = 0, j = s.length - 1, ans = s.split('')
    while (i < j) {
        while (i < j && !isYY(ans[i])) i++;
        while (i < j && !isYY(ans[j])) j--;
        [ans[i], ans[j]] = [ans[j], ans[i]]
        i++, j--
    }
    return ans.join('')
    
    function isYY (item) {
        const obj = { a: true, e: true, i: true, o: true, u: true, A: true, E: true, I: true, O: true, U: true }
        return obj[item]
    }
};
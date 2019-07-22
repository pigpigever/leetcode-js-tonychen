/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let result = [ S[0] ], i = 1
    while (i < S.length) {
        if (S[i] === result[result.length - 1]) {
            result.pop()
        } else {
            result.push(S[i])
        }
        i++
    }
    return result.join('')
};
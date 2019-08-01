/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let ans = 0
    for (let i = 1; i <= N; i++) {
        if (/^(?![018]+$)[0125689]+$/.test(i)) {
            ans++
        }
    }
    return ans
};
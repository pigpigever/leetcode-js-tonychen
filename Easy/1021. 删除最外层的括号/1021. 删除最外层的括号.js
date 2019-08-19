/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let stack = [], str = '', res = ''
    let i = 0, len = S.length

    while (i < len) {
        let top = stack[stack.length - 1]

        if (top === '(') {
            if (S.charAt(i) === '(') {
                stack.push(S.charAt(i))
            } else {
                stack.pop()
            }
            str += S.charAt(i)
        } else {
            res += str.substring(1, str.length - 1)
            stack.push(S.charAt(i))
            str = S.charAt(i)
        }
        i++
    }
    return res + str.substring(1, str.length - 1)
};
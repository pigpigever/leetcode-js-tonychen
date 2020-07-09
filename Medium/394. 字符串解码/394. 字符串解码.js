/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if (!s) {
        return ''
    }
    const stack = [s[0]]
    let res = ''
    let index = 1
    while (stack.length || index < s.length) {
        if (s[index] === ']' || index === s.length) {
            console.log('before-->', res)
            let currStr = ''
            let currNum = ''
            while (stack.length && stack[stack.length - 1] !== '[') {
                currStr = stack.pop() + currStr
            }
            if (stack.length) {
                stack.pop()
            }
            while (stack.length && /\d/.test(stack[stack.length - 1])) {
                currNum = stack.pop() + currNum
            }
            let loop = parseInt(currNum)
            if (!loop) {
                res += currStr
            } else {
                while (loop--) {
                    res += currStr
                }
            }
            console.log(currNum, currStr, res)
        } else {
            stack.push(s[index])
        }
        index++
    }
    return res
};

// console.log('result-->', decodeString("3[a]2[bc]"))
// console.log('result-->', decodeString("3[a2[c]]"))
// console.log('result-->', decodeString('2[abc]3[cd]ef'))
console.log('result-->', decodeString('3[a2[c]]'))

// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".


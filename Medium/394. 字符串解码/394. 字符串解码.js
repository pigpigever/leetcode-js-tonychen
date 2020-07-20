/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    const helper = (index) => {
        if (index >= s.length || s.charAt(index) === ']') {
            return index
        }

    }
    let i = 0
    let res = ''
    while (i < s.length) {
        i = helper(i)
    }
    return res
}

// console.log('result-->', decodeString("3[a]2[bc]"))
// console.log('result-->', decodeString("3[a2[c]]"))
// console.log('result-->', decodeString('2[abc]3[cd]ef'))
console.log('result-->', decodeString('3[a2[c]]'))

// s = "3[a]2[bc]", 返回 "aaabcbc".
// s = "3[a2[c]]", 返回 "accaccacc".
// s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".


// 输入: 26
// 输出: "1a"
// 输入: -1
// 输出: "ffffffff"
/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
    if (num === 0) {
        return '0'
    }
    let res = ''
    const tmp = '0123456789abcdef'
    while(num != 0 && res.length < 8 ){
        res = tmp[num & 15] + res
        num >>= 4
    }
    return res
}

console.log(toHex(-1), toHex(100))

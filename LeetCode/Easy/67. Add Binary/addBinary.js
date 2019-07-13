/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1
    let carry = 0, str = ''

    while (i >= 0 || j >= 0) {
        let A = a[i] - 0, B = b[j] - 0
        if (i >= 0 && j >= 0) {
            str += (A + B + carry) % 2
            carry = Math.floor(( A + B + carry) / 2)
        } else if (i >= 0) {
            str += (A + carry) % 2
            carry = Math.floor((A + carry) / 2)
        } else {
            str += (B + carry) % 2
            carry = Math.floor((B + carry) / 2)
        }
        i--, j--
    }
    str = carry === 0 ? str : str +  carry
    return str.split('').reverse().join('')
};

console.log(addBinary('100', '110010'))
// console.log(addBinary('0', '1'))

// 输入: a = "1010", b = "1011"
// 输出: "10101"
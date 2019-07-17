/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let tmp = 0, carry = 1
    for (let i = digits.length - 1; i >= 0; i--) {
        tmp = digits[i]
        digits[i] = (tmp + carry) % 10
        carry = Math.floor((tmp + 1) / 10)
        if (!carry) {
            return digits
        }
    }
    if (carry) {
        digits.unshift(carry)
    }
    return digits
};

console.log(plusOne([9,9, 9]))

// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
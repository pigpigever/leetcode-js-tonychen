/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    let result = [], temp = num
    num = num >= 0 ? num : -num
    if (!num) return '0'
    while (num !== 0) {
        result.unshift(num % 7)
        num = Math.floor(num / 7)
    }
    return temp >= 0 ? result.join('') : '-' + result.join('')
};
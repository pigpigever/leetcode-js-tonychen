/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let sum = [],
        length = s.length,
        i = 0
    while (s.length !== 0) {
        sum.push(s.split('').slice(0, 2 * k).join(''))
        s = s.split('').slice(2 * k).join('')
    }
    return sum.map(item => {
        return item.split('').slice(0, k).reverse().join('') + item.split('').slice(k).join('')
    }).join('')
};
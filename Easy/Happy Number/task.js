/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let result = String(n).split(''),
        counter = 1
    let collections = new Set();
    collections.add(result.join(''))

    while (counter === collections.size) {
        result = result.reduce((total, currentValue) => {
            return total + Math.pow(currentValue, 2)
        }, 0)
        counter++
        collections.add(String(result))
        result = String(result).split('')
        if(result[0] === '1' && result.length === 1){
            return true
        }
    }
    return false
};
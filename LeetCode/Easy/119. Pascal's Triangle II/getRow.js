/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    for (let i = 0; i <= rowIndex; i++) {
        result[i] = 0
    }
    result[0] = 1
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j >= 1; j--) {
            result[j] += result[j - 1]
        }
    }
    return result
};

console.log(getRow(3))
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0, len = arr.length

    while (i < len) {
        if (arr[i] === 0 && i + 1 < len) {
            for (let j = len - 1; j > i + 1; j--) {
                arr[j] = arr[j - 1]
            }
            arr[++i] = 0
        }
        i++
    }
};
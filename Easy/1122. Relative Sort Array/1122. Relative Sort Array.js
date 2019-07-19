/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = []

    while (arr2.length) {
        let i = arr1.length
        let target = arr2.pop()
        while (i--) {
            if (arr1[i] === target) {
                result.unshift(target)
                arr1.splice(i, 1)
            }
        }
    }
    return result.concat(arr1.sort((a, b) => a - b))
};

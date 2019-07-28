/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, k) {
    let offset = 0, i = A.length - 1
    while (i >= 0 && k > 0) {
        let res = A[i] + offset + k % 10
        offset = Math.floor(res / 10)
        A[i] = res % 10
        k = Math.floor(k / 10)
        i--
    }
    while (i >= 0 && offset) {
        let res = A[i] + offset
        offset = Math.floor(res / 10)
        A[i] = res % 10
        i--
    }
    while (k > 0) {
        let res = k % 10 + offset
        A.unshift(res % 10)
        offset = Math.floor(res / 10)
        k = Math.floor(k / 10)
    }
    return offset === 0 ? A : [offset, ...A]
};
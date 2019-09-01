/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        let j = 0, k = A[i].length - 1
        while (j < k) {
            if (A[i][j] === A[i][k]) {
                A[i][j] ^= 1
                A[i][k] ^= 1
            }
            j++, k--
        }
        if (j === k) {
            A[i][j] ^= 1
        }
    }
    return A
};
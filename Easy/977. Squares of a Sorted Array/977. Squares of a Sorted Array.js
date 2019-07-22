/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A.sort((a, b) => Math.abs(a) - Math.abs(b))
    return A.map((item) => item * item)
};
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let a = 0, b = 1
    for (let i = 1; i < N; i++) {
        let tmp = b
        b = a + b
        a = tmp
    }
    return N > 0 ? b : a
};
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = function(N, K) {
    if (N === 1) {
        return 0
    }
    if (K % 2 === 1) {
        return kthGrammar(N - 1, Math.floor(K / 2) + 1)
    }
    return kthGrammar(N - 1, Math.floor(K / 2)) ? 0 : 1
}

// console.log(kthGrammar(4, 5))
console.log(kthGrammar(30,434991989))

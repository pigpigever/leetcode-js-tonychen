/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let hashMap = {}
    for (let i = 0; i < A.length; i++) {
        if (!hashMap[A[i]]) {
            hashMap[A[i]] = 1
        } else {
            return A[i]
        }
    }
};
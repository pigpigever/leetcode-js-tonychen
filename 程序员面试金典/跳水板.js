/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
const divingBoard = function(shorter, longer, k) {
    const res = []
    for (let i = 0; i <= k; i++) {
        const length = longer * i + shorter * (k - i)
        if (length && length !== res[res.length - 1]) {
            res.push(length)
        }
    }
    return res
};

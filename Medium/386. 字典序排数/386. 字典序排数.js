/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function(n) {
    const helper = (curr) => {
        if (curr > n) {
            return
        }
        res.push(curr)
        for (let i = 0; i < 10; i++) {
            const next = curr * 10 + i
            if (next > n) {
                return
            }
            helper(next)
        }
    }
    const res = []
    for (let i = 1; i < 10; i++) {
        helper(i)
    }
    return res
};

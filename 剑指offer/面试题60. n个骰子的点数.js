/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
    const getCount = (index, sum) => {
        if (index === n) {
            return 1
        }
        let cnt = 0
        for (let i = 1; i <= 6; i++) {
            const key = `${index + 1}-${i}`
            const val = getCount(index + 1, sum + i)
            cnt += val
            map.set(key, val)
        }
        return cnt
    }
    const cnt = Math.pow(6, n)
    const map = new Map()
    const res = []
    for (let i = 1; i <= 6; i++) {
        const key = `${1}-${i}`
        map.set(key, getCount(1, i))
    }
    console.log(map)
    for (const [key, val] of map) {
        res.push(val / cnt)
    }
    return res
};

console.log(twoSum(2))

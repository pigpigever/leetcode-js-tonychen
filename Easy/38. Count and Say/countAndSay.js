/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = [ 0, '1' ]

    for (let i = 2; i <= n; i++) {
        let tmp = result[i - 1], str = '', flag = 0
        const len = tmp.length
        for (let j = 1; j <= len; j++) {
            if (tmp[j - 1] === tmp[j]) {
                flag++
            } else if (flag > 0) {
                str += (flag + 1) + '' + tmp[j - 1]
                flag = 0
            } else {
                str += '1' + tmp[j - 1]
            }
        }
        // if (flag > 0) {
        //     str += (flag + 1) + '' + tmp[len - 1]
        // } else {
        //     str += '1' + tmp[len - 1]
        // }
        result.push(str)
    }
    return result[n]
};

// countAndSay(6)
console.log(countAndSay(7))

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
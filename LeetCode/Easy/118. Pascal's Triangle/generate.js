/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [ [1] ], tmp = []

    for (let i = 1; i < numRows; i++) {
        tmp = [1]
        for (let j = 1; j < i; j++) {
            tmp.push(result[i - 1][j] + result[i - 1][j - 1])
        }
        result.push([...tmp, 1])
    }
    return numRows ? result : []
};

console.log(generate(0))

// 输入: 5
// 输出:
// [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1]
// ]
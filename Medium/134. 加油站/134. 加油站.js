/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
    let rest = 0
    let curr = 0
    let start = 0
    for (let i = 0; i < gas.length; i++) {
        rest += gas[i] - cost[i]
        curr += gas[i] - cost[i]
        if (curr <= 0) {
            curr = 0
            start = i + 1
        }
    }
    return rest >= 0 ? start : -1
}

console.log(canCompleteCircuit(
[1,2,3,4,5,5,70],
[2,3,4,3,9,6,2]
))

// console.log(canCompleteCircuit(
//  [1,2,3,4,5],
// [3,4,5,1,2])
// )
//
// console.log(canCompleteCircuit(
//     [2, 3, 4],
//     [3, 4, 3])
// )

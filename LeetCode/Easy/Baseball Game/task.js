/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var sum = [],
    opStatck = [],
    pre = 0,
    counter = 0,
    index,
    temp
  for (var i = 0; i < ops.length; i++) {
    counter = 0,index = 0, temp = 0
    switch (ops[i]) {
      case '+':
        temp += opStatck[opStatck.length - 1] + opStatck[opStatck.length - 2]
        opStatck.push(temp)
        sum.push(temp + sum[sum.length - 1])
        pre = sum[sum.length - 1]
        break;
      case 'D':
        temp = opStatck[opStatck.length - 1] * 2
        opStatck.push(Number(temp))
        sum.push(sum[sum.length - 1] + temp)
        pre = sum[sum.length - 1]
        break;
      case 'C':
        opStatck.pop()
        sum.pop()
        pre = sum.length == 0 ? 0 : sum[sum.length - 1]
        break;
      default:
        opStatck.push(Number(ops[i]))
        sum.push(Number(ops[i]) + pre)
        pre = sum[sum.length - 1]
        break;
    }
  }
  return sum[sum.length - 1]
};

console.log(calPoints(["1","C","-62","-45","-68"]))

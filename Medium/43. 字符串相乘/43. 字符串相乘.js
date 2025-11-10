/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  const arr = []
  let carry = 0
  let count = 0

  const trimLeadingZeros = str => {
    let i = 0;
    while (i < str.length - 1 && str[i] === '0') i++;
    return str.slice(i);
  };

  const add = (num1, num2) => {
    let i = num1.length - 1
    let j = num2.length - 1
    let str = ''
    let carry = 0
    while (i >= 0 || j >= 0){
      const a = i >= 0 ? Number(num1[i]) : 0
      const b = j >= 0 ? Number(num2[j]) : 0
      const value = (a + b + carry) % 10
      carry = Math.floor((a + b + carry) / 10)
      str = value + str
      i--
      j--
    }
    if (carry) {
      str = carry + str
    }
    return str.replace(/^0/g, '')
  }

  for (let i = num2.length - 1; i >= 0; i--) {
    let str = ''
    for (let j = num1.length - 1; j >= 0; j--) {
      const value = (num1[j] * num2[i] + carry) % 10
      carry = Math.floor((num1[j] * num2[i] + carry) / 10)
      str = value + str
    }
    if (carry) {
      str = carry + str
      carry = 0
    }
    const length = str.length + count
    arr.push(str.padEnd(length, '0'))
    count++
  }
  return trimLeadingZeros(
    arr.reduce((result, curr) => add(result, curr))
  )
}
const divide = require('./index')
describe('两数相除', () => {
  it('should return correct result if dividend and divisor are both positive num', () => {
    const results = [
      divide(10, 3),
      divide(9, 8)
    ]
    const expected = [3, 1]
    results.forEach((result, i) => expect(result).toBe(expected[i]))
  })

  it('should return correct result if dividend and divisor are both negative num', () => {
    const result = divide(-9, -8)
    expect(result).toBe(1)
  })

  it('should return correct result if dividend is positive num and divisor is negative num', () => {
    const result = divide(9, -8)
    expect(result).toBe(-1)
  })

  it('should return correct result if dividend is negative num and divisor is positive num', () => {
    const result = divide(-9, 8)
    expect(result).toBe(-1)
  })

  it('should return 2^31 - 1 if result is greater than 2^31 - 1', () => {
    const result = divide(-2147483648, -1)
    expect(result).toBe(2147483647)
  })
})
const addStrings = function(num1: string, num2: string): string {
    if (!num1 || !num2) {
        return num1 || num2
    }
    let i: number = num1.length - 1
    let j: number = num2.length - 1
    let res: string = ''
    let carry: number = 0
    while (i >= 0 || j >= 0) {
        const first = i >= 0 ? parseInt(num1[i--]) : 0
        const second = j >= 0 ? parseInt(num2[j--]) : 0
        const val = first + second + carry
        carry = Math.floor(val / 10)
        res = val % 10 + res
    }
    return carry ? carry + res : res
};

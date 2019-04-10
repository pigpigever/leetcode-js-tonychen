// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let tempArray = s.split('')
	let stack = []

	if (tempArray.length === 0) {
		return true
	}

	if (tempArray.length === 1) {
		return false
	}

	stack.unshift(tempArray.shift())
	while (tempArray.length) {
		switch (tempArray[0]) {
			// 如果栈顶第一字符是左括号，那么继续入栈
			case '(':
			case '{':
			case '[':
				stack.unshift(tempArray.shift())
				break
			// 如果栈顶第一个字符不是左括号，那么尝试匹配
			case ')':
			case '}':
			case ']':
				if (
					tempArray[0] === ')' && stack[0] === '(' ||
					tempArray[0] === '}' && stack[0] === '{' ||
					tempArray[0] === ']' && stack[0] === '[') {
						tempArray.shift()
						stack.shift()
				} else {
					return false
				}
				break
			default:
				break
		}
	}
	if (!stack.length && !tempArray.length) {
		return true
	}
	return false
};

console.log(isValid('{{[}]}'))
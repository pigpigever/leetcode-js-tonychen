function add (num) {
	if (num <= 0) {
		return num
	}
	return num + add(num - 1)
}

let result = add(100)
console.log('result --->', result)
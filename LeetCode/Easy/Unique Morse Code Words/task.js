/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
	const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	let morseMap = new Map()
	let result = ''
	let set = new Set()
	letters.forEach((item, index) => {
		morseMap.set(item, morse[index])
	})
	for (let word of words) {
		result = ''
		word.split('').forEach(item => {
			result += morseMap.get(item)
		})
		if (result) {
			console.log(result)
			set.add(result)
		}
	}
	return set.size
};

console.log(uniqueMorseRepresentations(["gin", "zen", "lqtktn", "msg"]))

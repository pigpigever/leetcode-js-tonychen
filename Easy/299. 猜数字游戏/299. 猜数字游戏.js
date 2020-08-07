/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
    const map = new Map()
    const cows = new Map()
    let bulls = 0
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            cows.set(i, true)
        } else {
            if (!map.has(secret[i])) {
                map.set(secret[i], 1)
            } else {
                map.set(secret[i], map.get(secret[i]) + 1)
            }
        }
    }
    for (let i = 0; i < secret.length; i++) {
        if (!cows.has(i)) {
            if (map.get(guess[i]) >= 1) {
                bulls++
                map.set(guess[i], map.get(guess[i]) - 1)
            }
        }
    }
    return `${cows.size}A${}`
}

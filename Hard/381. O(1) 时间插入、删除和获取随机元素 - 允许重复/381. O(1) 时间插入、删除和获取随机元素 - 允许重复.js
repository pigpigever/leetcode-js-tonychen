/**
 * Initialize your data structure here.
 */
const RandomizedCollection = function() {
    this.map = new Map()
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    const { map } = this
    let flag = true
    if (map.has(val)) {
        map.set(val, map.get(val) + 1)
        flag = false
    } else {
        map.set(val, 1)
    }
    return flag
}

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    const { map } = this
    if (map.has(val)) {
        if (map.get(val) === 1) {
            map.delete(val)
        } else {
            map.set(val, map.get(val) - 1)
        }
        return true
    }
    return false
}

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    const { map } = this
    const res = []
    for (const [key, val] of map) {
        for (let i = 0; i < val; i++) {
            res.push(key)
        }
    }
    const target = Math.floor(Math.random() * res.length)
    return res[target]
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

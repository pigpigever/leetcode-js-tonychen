/**
 * Initialize your data structure here.
 */
const Logger = function() {
    this.map = new Map()
}

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
 If this method returns false, the message will not be printed.
 The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const { map } = this
    if (!map.has(message)) {
        map.set(message, timestamp)
        return true
    }
    if (timestamp - map.get(message) >= 10) {
        map.set(message, timestamp)
        return true
    }
    return false
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

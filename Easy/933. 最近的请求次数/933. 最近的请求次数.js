const RecentCounter = function() {
    this.requests = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    const { requests } = this
    if (!requests.length) {
        requests.push(t)
        return 1
    }
    while (requests.length) {
        if (t - requests[0] > 3000) {
            requests.shift()
        } else {
            break
        }
    }
    requests.push(t)
    return requests.length
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

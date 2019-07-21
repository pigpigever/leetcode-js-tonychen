/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.ele = []
    this.min = Number.MAX_SAFE_INTEGER
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.min > x) {
        this.min = x
    }
    this.ele.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.min === this.ele.pop()) {
        this.min = Number.MAX_SAFE_INTEGER   
    }
    for (let i = 0; i < this.ele.length; i++) {
        if (this.ele[i] < this.min) {
            this.min = this.ele[i]
        }
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.ele[this.ele.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
const MinStack = function() {
    this.stack = [];
    this.minStack = [Infinity];
};

MinStack.prototype.push = function(x) {
    this.stack.unshift(x);
    this.minStack.unshift(Math.min(this.minStack[0], x));
};

MinStack.prototype.pop = function() {
    this.stack.shift();
    this.minStack.shift();
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

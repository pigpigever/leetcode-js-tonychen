var MovingAverage = function(this: any, size: number) {
    this.nums = []
    this.sum = 0
    this.size = size
};

MovingAverage.prototype.next = function(val: number): number {
    if (this.nums.length >= this.size) {
        this.sum -= this.nums[0]
        this.nums.shift()
    }
    this.nums.push(val)
    this.sum += val
    return this.sum / this.nums.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

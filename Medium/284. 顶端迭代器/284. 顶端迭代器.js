/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
const PeekingIterator = function(iterator) {
    this._head = {next: {}};
    let curr = this._head.next;
    let prev = this._head;
    while(iterator.hasNext()) {
        curr.val = iterator.next()
        curr.next = {}
        prev = curr;
        curr = curr.next;
    }
    prev.next = null
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (this._head.next) {
        return this._head.next.val;
    }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if (this._head.next) {
        const val = this._head.next.val
        this._head = this._head.next;
        return val;
    }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return !!this._head.next;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.root = root
    this.index = -1
    this.arr = this.getAllVal(root)
    this.max = this.arr[this.arr.length - 1]
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.arr[++this.index]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index < this.arr.length - 1
};

BSTIterator.prototype.getAllVal = function () {
    const dfs = (node) => {
        if (!node) {
            return []
        }
        return dfs(node.left).concat([node.val]).concat(dfs(node.right))
    }
    return dfs(this.root)
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
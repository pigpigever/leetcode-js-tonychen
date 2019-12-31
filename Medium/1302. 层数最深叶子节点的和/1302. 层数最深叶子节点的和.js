/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    const res = [], queue = [root]
    while (queue.length) {
        let count = queue.length
        let sum = 0
        while (count--) {
            let node = queue.shift()
            sum += node.val
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.push(sum)
    }
    return res[res.length - 1]
};
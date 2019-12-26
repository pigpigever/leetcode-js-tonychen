/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    const queue = [root], res = []
    let tmp = 0
    while (queue.length) {
        let root, count = queue.length, helper = []
        while (count--) {
            root = queue.shift()
            helper.push(root.val)
            const left = root.left, right = root.right
            if (left) {
                queue.push(left)
            }
            if (right) {
                queue.push(right)
            }
        }
        if (tmp % 2 === 0) {
            res.push(helper.slice())
        } else {
            res.push(helper.slice().reverse())
        }
        tmp++
    }
    return res
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(root === null) return []
    var queue = []
    queue.unshift(root)
    while (queue.length !== 0) {
        var node = queue[0],
            left = node.left
        queue.shift()
        node.left = node.right
        node.right = left

        if(node.left !== null){
            queue.push(node.left)
        }

        if(node.right !== null){
            queue.push(node.right)
        }
    }
    return root
};
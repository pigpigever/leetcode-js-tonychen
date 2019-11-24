/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = []
    travel(root)
    return ans
    function travel (root) {
        if (root) {
            travel(root.left)
            ans.push(root.val)
            travel(root.right)
        }
    }
};
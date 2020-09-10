/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
const sufficientSubset = function(root, limit) {
    const deleteSubset = (root, sum) => {
        if (!root) {
            return null
        }
        root.left = deleteSubset(root.left, sum + root.val)
        root.right = deleteSubset(root.right, sum + root.val)
        
        return root
    }
    return deleteSubset(root, 0)
}

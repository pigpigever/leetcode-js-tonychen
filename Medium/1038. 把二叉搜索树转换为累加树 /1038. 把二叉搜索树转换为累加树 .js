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
const bstToGst = function (root) {
    const helper = (root) => {
        if (!root) {
            return;
        }
        helper(root.right);
        let {val} = root;
        root.val += prev;
        prev += val;
        helper(root.left);
    };
    let prev = 0;
    helper(root);
    return root;
};

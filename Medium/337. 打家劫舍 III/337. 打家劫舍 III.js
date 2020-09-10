 // Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/*
 * @param {TreeNode} root
 * @return {number}
 */
const rob = function(root) {
    const sum = (root) => {
        if (!root) {
            return 0
        }
        if (map.has(root)) {
            return map.get(root)
        }
        const { val, left, right } = root
        const selectCurr = val + sum(left && left.left) + sum(left && left.right)
            + sum(right && right.left) + sum(right && right.right)
        const selectChild = sum(left) + sum(right)
        map.set(root, Math.max(selectCurr, selectChild))
        return map.get(root)
    }
    const map = new Map()
    return sum(root)
}

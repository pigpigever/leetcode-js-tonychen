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
const verticalOrder = function(root) {
    /**
     * 标记并存储二叉树的每个节点
     * @param root
     * @param index
     * @param depth
     */
    const helper = (root, index, depth) => {
        if (!root) {
            return
        }
        const { val, left, right } = root
        min = Math.min(min, index)
        max = Math.max(max, index)
        if (map.has(index)) {
            map.set(index, [...map.get(index), {depth, val}])
        } else {
            map.set(index, [{depth, val}])
        }
        helper(left, index - 1, depth + 1)
        helper(right, index + 1, depth + 1)
    }
    if (!root) {
        return []
    }
    const map = new Map()
    const res = []
    let min = 0
    let max = 0
    helper(root, 0, 0)
    for (let i = min; i <= max; i++) {
        const nums = map.get(i).sort((a, b) => a.depth - b.depth).map((item) => item.val)
        res.push(nums)
    }
    return res
}

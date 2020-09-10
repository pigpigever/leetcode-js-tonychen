// 给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。
// 一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。
//
// 你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。
//
//
//
// 示例 1：
// 输入:
//
//       5
//     /  \
//    2   -3
// 返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。
//
// 示例 2：
// 输入：
//
//     5
//   /  \
//  2   -5
// 返回 [2]，只有 2 出现两次，-5 只出现 1 次。

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
const findFrequentTreeSum = function(root) {
    const helper = (root) => {
        if (!root) {
            return 0
        }
        const { val, left, right } = root
        const sum = val + helper(left) + helper(right)
        if (!map.has(sum)) {
            map.set(sum, 1)
        } else {
            map.set(sum, map.get(sum) + 1)
        }
        maxSize = Math.max(maxSize, map.get(sum))
        return sum
    }
    const map = new Map()
    const res = []
    let maxSize = -Infinity
    helper(root)
    for (const [key, val] of map) {
        if (val === maxSize) {
            res.push(key)
        }
    }
    return res
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let Lqueue = [],
        Rqueue = []
    if (p === null) {
        if (q === null) {
            return true
        }
        return false
    }
    Lqueue.push(p), Rqueue.push(q)
    while (Lqueue.length && Rqueue.length) {
        let L = Lqueue.length,
            R = Rqueue.length
        if (L !== R) {
            return false
        }
        while (L--) {
            if (Lqueue[0].left !== null) {
                if (Rqueue[0].left === null) {
                    return false
                } else if (Lqueue[0].left.val !== Rqueue[0].left.val) {
                    return false
                }
                Lqueue.push(Lqueue[0].left)
                Rqueue.push(Rqueue[0].left)
            }
            if (Lqueue[0].right !== null) {
                if (Rqueue[0].right === null) {
                    return false
                } else if (Lqueue[0].right.val !== Rqueue[0].right.val) {
                    return false
                }
                Lqueue.push(Lqueue[0].right)
                Rqueue.push(Rqueue[0].right)
            }
            Lqueue.shift(), Rqueue.shift()
        }
    }
};
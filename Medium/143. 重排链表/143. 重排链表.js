/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
    if (!head || !head.next) {
        return
    }
    const res = []
    let p = head
    while (p) {
        res.push(p)
        p = p.next
    }
    const N = res.length
    let i = 0
    let next = null
    for (; i < Math.floor(N / 2); i++) {
        next= res[N - i - 1]
        res[i].next = next
        next.next = res[i + 1]
    }
    next.next = res[i]
    if (res[i]) {
        res[i].next = null
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let set = new Set(), p = head
    while (p) {
        let len = set.size
        set.add(p)
        if (set.size !== len + 1) {
            return p
        }
        p = p.next
    }
    return null
};
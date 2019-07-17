/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head
    }
    let first = new ListNode(), pre = first
    let p = first.next = head
    while (p) {
        if (p.val === val) {
            pre.next = p.next
        } else {
            pre = p
        }
        p = p.next
    }
    return first.next
};
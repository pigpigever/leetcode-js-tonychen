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
var oddEvenList = function(head) {
    let target = head, p = head, count = 1, pre = null
    while (p) {
        if (count > 1 && count % 2 !== 0) {
            let next = target.next
            pre.next = p.next
            target.next = p
            p.next = next
            p = pre
            target = target.next
        }
        pre = p
        p = p.next
        count++
    }
    return head
};
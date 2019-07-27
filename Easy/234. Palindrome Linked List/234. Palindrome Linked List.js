/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true
    }
    let slow = head, fast = head.next, p
    while (fast && fast.next) {
        let tmp = slow
        slow = slow.next
        slow.pre = tmp
        fast = fast.next.next
    }
    p = fast && !fast.next ? slow : slow.pre
    slow = slow.next
    while (slow) {
        if (slow.val !== p.val) {
            return false
        }
        slow = slow.next
        p = p.pre
    }
    return true
};
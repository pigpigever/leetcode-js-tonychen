/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sum = 0, carry = 0, head = l1, pre
    while (l1 && l2) {
        sum = l1.val + l2.val + carry
        l1.val = sum % 10
        carry = Math.floor(sum / 10)
        pre = l1
        l1 = l1.next
        l2 = l2.next
    }
    while (l1) {
        sum = l1.val + carry
        l1.val = sum % 10
        carry = Math.floor(sum / 10)
        pre = l1
        l1 = l1.next
    }
    while (l2) {
        l1 = {}
        pre.next = l1
        sum = l2.val + carry
        l1.val = sum % 10
        carry = Math.floor(sum / 10)
        pre = l1
        l1 = l1.next
        l2 = l2.next
    }
    if (carry) {
        l1 = {}
        pre.next = l1
        l1.val = carry
    }
    return head
};
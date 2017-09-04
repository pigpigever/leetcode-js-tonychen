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
//解法1
var reverseList = function (head) {
    let temp = head,
        result = []
    while (temp != null) {
        result.push(temp.val)
        temp = temp.next
    }
    temp = head, i = 0
    result.reverse()
    while (temp != null) {
        temp.val = result[i++]
        temp = temp.next
    }
    return head
};
//解法2
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
var reverseList = function(head) {
    let pre = null
    while(head){
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};
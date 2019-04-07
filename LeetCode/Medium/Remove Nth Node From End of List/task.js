/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let temp = new ListNode()
	temp.next = head
	let p = q = temp, pre, target
	for (let i = 0; i <= n; i++) {
		p = p.next
	}
	while(p) {
		p = p.next
		q = q.next
	}
	q.next = q.next.next
	return head
};
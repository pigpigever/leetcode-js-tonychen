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
var mergeTwoLists = function(l1, l2) {
	let target = l1, tmp, pre = {}, first = true
	if (!l1 || !l2) {
		return l1 || l2
	}
	while (l1 && l2) {
		if (l1.val > l2.val) {
			tmp = new ListNode(l2.val)
			pre.next = tmp
			target = first ? tmp : target
			tmp.next = l1
			pre = tmp
			l2 = l2.next
		} else {
			if (l1.val === l2.val) {
				let next = l1.next
				l1.next = new ListNode(l2.val)
				l1.next.next = next
				pre = l1.next
				l1 = next
				l2 = l2.next
			} else {
				pre = l1
				l1 = l1.next
			}
		}
		first = false
	}
	if (!l1 && l2) {
		pre.next = l2
	}
	return target
};

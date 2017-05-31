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
    let current = head;
    let list = [];
    while (current) {
        list.push(current);
        current = current.next;
    }
    
    const len = list.length;
    const index = len - n;
    
    if (index === 0) return list[1] || null;
    
    if(index > 0) list[len - n - 1].next = (list[len - n + 1] || null);
    return head;

};


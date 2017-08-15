/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function makeGroup (head, k) {
    return (head === null || k === 0) ? 
        [] :
        [head, ...makeGroup(head.next, k - 1)];
}

var reverseKGroup = function(head, k) {
    const start = new ListNode(0);
    start.next = head;
    
    let before = start;
    let group;
    
    while ((group = makeGroup(before.next, k)).length === k) {
        const first = group[0];
        const last = group[k - 1];
        const next = last.next;
        before.next = last;
        
        for (let i = k - 1 ; i > 0; i --) {
            group[i].next = group[i - 1];
        }
             
        first.next = next;
        before = first;
    }
    
    return start.next;
    
};
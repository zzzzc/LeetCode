/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 1) return lists[0];
    
    const head = new ListNode(1);
    
    let newListCur = head;
    let sortedList = lists.filter(d => d !== null).sort((a,b) => a.val - b.val);
    
    while (sortedList.length) {
        const curNode = newListCur.next = sortedList[0];
        const insertNode = curNode.next;
        
        sortedList.shift();
        
        if (insertNode !== null) {
            const insertIndex = sortedList.findIndex(d => d.val > insertNode.val);
            insertIndex === -1 ? 
                sortedList.push(insertNode) : 
                sortedList.splice(insertIndex,0,insertNode);
        }
        
        // set current node of newlist;
        newListCur = curNode;
    }
    
    return head.next;
};



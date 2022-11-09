

var reverseList = function(head) {/* O(n) and O(1)
*/
    let prev = null;
    
    while(head){
        let ref = head;
        head = head.next;
        ref.next = prev;
        prev = ref;
    }
    
    return prev;
};
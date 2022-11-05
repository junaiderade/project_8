//if you can't rederive something on the spot you don't know it

var hasCycle = function(head) { //1/10 | O(n) and O(1)
    slow = head;
    fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
};
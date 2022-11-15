//if you can't rederive something on the spot you don't know it

var reverseList = function(head) {/* O(n) and O(1)
The kicker with this problem is the order in the while loop
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

var reverseBetween = function(head, left, right) {/* O(n) and O(1)
Originally, i used an array to get the solution. What was hard about this problem
was wrapping my head around all the pointers and counters I used. I think it would help a lot to use
a piece of paper or excel to keep track of the variables while I do the problem.
It also helps TREMENDOUSLY to use a variable for each interval. p1Start, p1End, and eliminate variables you don't need at end
*/
    
    if(!head){
        return null;
    }
    
    let pos = 1;
    
    let p1Start = head;
    let p1End = null;
    let p2End = null;
    
    while(head && pos < left){
        p1End = head;
        head = head.next;
        pos++;//when pos reached the value of left, p1End will be correct;
    }
    
    p2End = head;//this will then be the start of the list to reverse, will be at the end of the list when reverses
    
    let prev = null;
    
    while(head && pos <= right){//at the end of this, prev will hold the reversed list
        let ref = head;
        head = head.next;
        ref.next = prev;
        prev = ref;
        pos++
    }
    
    p2End.next = head;//head will be the next of the last reversed position
    if(p1End == null){//means left was 1 and list starts from prev
        return prev;
    }
    else{
        p1End.next = prev;
    }
    
    return p1Start;
    
    };

var reverseKGroup = function(head, k) {/* O(n) and O(1)
Again, what really mattered from the beginning was using variables for the intervals
*/
    let len = 0
    let copy = head;
    while(copy){//get length
        len++;
        copy = copy.next;
    }
    
    if(len <= 1){
        return head;
    }
    
    let preRevRight = new ListNode(0);//use dummy node at first
    let ret = preRevRight;//you will return the .next of this
    let postRevLeft;
    let postRevRight;
    
    let runs = len
    let i = 0
    
    while(head && runs > len%k){
        postRevRight = head;
        postRevLeft = null;
        while(head && i < k){
            let ref = head;
            head = head.next;
            ref.next = postRevLeft;
            postRevLeft = ref;
            i++;
            runs--;
        }
        preRevRight.next = postRevLeft;
        preRevRight = postRevRight;
        i = 0;
        postRevRight.next = head;
    }
    
    return ret.next;
    
};
//if you can't rederive something on the spot you don't know it

var hasCycle = function(head) { // 1/10 | O(n) and O(1)
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

var detectCyclehead = function(head) { /* 9/10 | O(n) and O(1) |
the challenge with this problem is that you should use O(1) space and not modify the list.
Also this IS a math problem! Implementation is simple but understanding why is hard
- L1 is defined as the distance between the head point and entry point
- L2 is defined as the distance between the entry point and the meeting point
Distance traveled by slow when they meet: L1+L2
Distance traveled by fast when they meet: L1+L2+x+L2, where x is the remaining length of the 
cycle (meeting point to start of the cycle). YOu also know that fast traveled twice as much as slow to get to the same place
2(L1+L2) = L1+L2+x+L2
2L1 + 2L2 = L1+2(L2)+x
=> x = L1

so we need to move L1 steps from the current meeting point to reach the entry point of the cycle.

example: in a cycle like below
        --------------
        |            |
1 - 2 - 3 - 4 - 5 - 6
sf
    s   f
        s       f
            sf

fast moved 8 places
slow moved 4 places
distane from head to entry is 3
distance from meeting point to entry must also be 3

now if you think about the formula it all makes sense

*/
    
    slow = head;
    fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            let slow = head;
            while(slow){
                if(slow == fast){
                    return slow;
                }
                slow = slow.next;
                fast = fast.next;
            }
        }
    }
    
    return null;
    
};

var isHappy = function(n) { /* 4/10 | O(log(n)) and O(1)

- use tortoise and hare to detect cycle. you can also do this with hashset
- tc is O(log(n)) because the max number you can 
*/
    
    function transform (num){
        let s = num + '';
        let sum = 0;

        for(let i = 0;i<s.length;i++){
            sum += parseInt(s[i])**2
        }
        return sum;
    }
    
    let slow = n;
    let fast = n;
    
    while(slow != 1){
        slow = transform(slow);
        fast = transform(transform(fast));
        if(slow == 1 || fast == 1){
            return true;
        }
        if(slow == fast){
            return false;
        }
    }
    
    return true;
};
//if you can't rederive something on the spot you don't know it
var removeDuplicates = function(nums) {// O(n) and O(1)
    let start = 0;
    let end = 0;
    while(end < nums.length){
        if(nums[start]==nums[end]){
            end++;
        }
        else{  
            nums[start+1] = nums[end];
            start++;
            end++;
        }
    }
    return start+1;
};

var sortedSquares = function(nums) {// O(n) and O(n) | key with this problem is getting to the 
    //lowest number and then going outwards in both directions. Helped to come back a day later with fresh mind. 
    //Need to trust myself. The first time I tried this problem I was right but didn't trust my gut.
    let pos_lowest = 0
    let ret = [];
    
    for(let i = 0;i< nums.length;i++ ){
        if(nums[i]**2 < nums[pos_lowest]**2){
            pos_lowest = i;
        }
    }
    
    ret.push(nums[pos_lowest]**2);
    
    let left = pos_lowest - 1;
    
    let right = pos_lowest + 1;
    
    while(left >=0 && right < nums.length){
        if(nums[left]**2 < nums[right]**2){
            ret.push(nums[left]**2);
            left--;
        }else{
            ret.push(nums[right]**2);
            right++;
        }
    }
    
    while(left >=0){
        ret.push(nums[left]**2);
        left--;
    }
    
    while(right < nums.length){
        ret.push(nums[right]**2);
        right++;
    }
    
    return ret;
    
};

var threeSum = function(nums) { //O(n^2) & O(logn) to O(n) depending on sorting algo | basically you are going thru the array and doing two sum II on rest of the array
    //technically you are using THREE pointers
    //when i did this before the solution,I also got an O(n) solution but it was not as space friendly. I used a hashmap to keep track of values to left and i used a for loop to keep track of values at right
    nums.sort((a,b) => a-b);
    let res = [];
    
    for(let i = 0;i<nums.length-2;i++){
        if(nums[i]>0) break;
        
        if(i>0 && nums[i]===nums[i-1]) continue;
        
        let j = i+1;
        let k = nums.length-1;
        while(j < k){
            let sum = nums[i]+nums[j]+nums[k];
            if(sum===0){
                res.push([nums[i],nums[j],nums[k]]);
                while(j < k && nums[j]===nums[j+1]){
                    j++;
                }
                while(j < k && nums[k]===nums[k-1]){
                    k--;
                }
                j++;
                k--;
            }else if(sum > 0){
                k--;
            }else{
                j++;
            }
        }
    }
    return res;
}
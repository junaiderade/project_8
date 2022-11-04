var maxSubArray = function(nums) { //2/10 | O(n) and O(1)
    let global_max = nums[0];
    let local_max = nums[0];
    
    for(let i = 1;i < nums.length;i++){
        local_max=Math.max(local_max+nums[i],nums[i]);
        global_max=Math.max(local_max,global_max);
    }
    
    return global_max;
};

var minSubArrayLen = function(s, nums) { //8/10 | O(n) and O(1) | 
    //each number is visited only twice. Did not start off with brute force
    let start = 0;
    let end = 0;
    let sum = 0;
    let minLen = nums.length;
    let found = false;

    while(end < nums.length+1){
        if(sum < s){
            sum+=nums[end];
            end++;
        }else{
            found = true
            sum-=nums[start];
            minLen = Math.min(end-start,minLen);
            start++
        }
    }
    
    if(found){
        return minLen;
    }
    
    return 0;
};

var lengthOfLongestSubstringKDistinct = function(s, k) {//7/10 | O(n) and O(n) | 
    //this is a sliding window + hashmap problem. Used excel to track inputs and outputs.
    
    if(k == 0 || s.length == 0){//make sure inputs are valid
        return 0;
    }
    
    let start = 0;//declare variables
    let end = 0;
    let map = new Map();
    let longest = 1;//you know the size will be at least 1
    let current_length = 0
    
    while(end < s.length){
        
        map.set(s[end],map.get(s[end]) + 1 || 1)
        
        if(map.size <= k){
            current_length++
            longest = Math.max(current_length,longest);
            end++;
        }else{
            map.set(s[start],map.get(s[start])-1);
            map.set(s[end],map.get(s[end])-1);
            if(map.get(s[start]) == 0){//you don't need to do the same thing for end because of next loop
                map.delete(s[start]);
            }
            start ++;
            current_length--;
        }
    }
    
    return longest;

};

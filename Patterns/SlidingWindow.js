var maxSubArray = function(nums) {
    let global_max = nums[0];
    let local_max = nums[0];
    
    for(let i = 1;i < nums.length;i++){
        //if the number is greater than local max, the local max should be the number
        local_max=Math.max(local_max+nums[i],nums[i]);
        global_max=Math.max(local_max,global_max);
    }
    
    return global_max;
};

/*
Time: O(n)
Space: O(1)
Date: 10/31/2022
Desc: Given an integer array nums, find the subarray which has the largest sum and return its sum.
Note: Right on first try
---------------------------------------------------------------------------------------------------------------------
*/

var minSubArrayLen = function(s, nums) {
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

/*
Time: O(n)
    - this is because each number can be visited a maximum of 2 times 
Space: O(1)
Date: 10/31/2022
Desc: 
    - Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Note: 
    - Needed to look at solution but I understand it
---------------------------------------------------------------------------------------------------------------------
*/

var lengthOfLongestSubstringKDistinct = function(s, k) {
    
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

/*
Time: O(n)
    - this is because each number can be visited a maximum of 2 times 
Space: O(n)
    - because you are using a hashmap
Date: 10/31/2022
Desc: 
    - Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Note: 
    - got this without looking at solution! above problem helped a TON. esstentially this is a sliding window + hasmap probem. 
    Also OMG OMG OMG utilize excel to track you inputs and outputs!
    Did not start off with the brute force solution, rather i jumped right in knowing the PATTERN.

---------------------------------------------------------------------------------------------------------------------
*/

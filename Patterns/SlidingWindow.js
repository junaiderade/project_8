/*
Time: O(n)
Space: O(1)
Date: 10/31/2022
Desc: Given an integer array nums, find the subarray which has the largest sum and return its sum.
    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
    Example 2:
    Input: nums = [1]
    Output: 1
    Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23
*/

var maxSubArray = function(nums) {
    let global_max = nums[0];
    let local_max = nums[0];
    
    for(let i = 1;i < nums.length;i++){
        //if the number is greater than local max, the local max should be the number
        local_max=Math.max(local_max+nums[i],nums[i]);
        global_max=Math.max(local_max,global_max);
    }
    
    return global_max
};


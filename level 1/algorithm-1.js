//task

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

//Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
    var runningSum = function (nums) {
    let sum = 0;
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        arr[i] = sum;
    } 
    return(arr)
};
//task

/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const a ={};
    for(let num of nums) {
       a[num] = a[num] ? a[num] + 1 : 1   
       }
    const result = Object.keys(a).filter((num) =>
    a[num] < 2);
    return result
};
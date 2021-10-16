/*
    ABOUT THE PROBLEM:
    Given an integer array nums, find the contiguous subarray (containing at least one number)
    which has the largest sum and return its sum.
    A subarray is a contiguous part of an array.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length < 1 || nums.length > Math.pow(10, 5)) {
        return 0
    }

    let dp = new Array(nums.length)
    let max = [(0, 0), nums[0]]
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Array(nums.length)
        for (let j = i; j < nums.length; j++) {
            if (i == j) {
                dp[i][j] = nums[i]
            } else {
                dp[i][j] = nums.slice(i, j+1).reduce((a,b)=>a+b,0);
                // sums the elements in nums from index j to index i
            }
            if (dp[i][j] > max[1]) {
                max = [(i, j), dp[i][j]]
            }
        }
    }
    return max[1]
}
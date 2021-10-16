/*
    ABOUT THE PROBLEM:
    Given an integer array nums, find the contiguous subarray (containing at least one number)
    which has the largest sum and return its sum.
    A subarray is a contiguous part of an array.
*/

const maxSubArray = function(nums) {
    if (nums.length < 1 || nums.length > Math.pow(10, 5)) {
        return 0
    }

    let dp = new Array(nums.length)
    let max = [[0,0], nums[0]]
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Array(nums.length)
        for (let j = i; j < nums.length; j++) {
            if (i === j) {
                dp[i][j] = nums[i]
            } else {
                dp[i][j] = dp[i][j-1] + nums[j]
                // sums the elements in nums from index j to index i
            }
            if (dp[i][j] > max[1]) {
                max = [[i,j], dp[i][j]]
            }
        }
    }
    return max
}

/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6
 */
let nums = [-2,1,-3,4,-1,2,1,-5,4]
let sol = maxSubArray(nums)

console.log("Input: nums = [" + nums + "]\n" +
    "Output - max Sum is: " + sol[1] +
    `\nThe subarray is from index ${sol[0][0]} to ${sol[0][1]}: [${nums.slice(sol[0][0], sol[0][1] + 1)}]`)

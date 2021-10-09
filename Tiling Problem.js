/*
    ABOUT THE PROBLEM:
    counting the number of possible tiling on a board of n tiles such that we have 2 options of tiles to use:
    - red ones that cover a single tile
    - blue ones that cover two tiles
*/

let TilingProblemRecursive = function(n) {
    if (n < 0) return 0
    if (n === 0 || n === 1) return 1
    return TilingProblemRecursive(n-1) + TilingProblemRecursive(n-2)
}

// DP Solution: time O(n) & space O(n)
let TilingProblem = function(n) {
    if (n < 0) return 0
    let dp = new Array(n + 1)
    if (n === 0 || n === 1) {
        dp[0] = 1
        dp[1] = 1
        return 1
    }
    if (dp[n] != null) {
        return dp[n]
    }
    dp[n] = TilingProblem(n-1) + TilingProblem(n - 2)
    return dp[n]
}

const n = 5
console.log("Recursive Outcome: " + TilingProblemRecursive(n) + '\n' +
    "DP Outcome: " + TilingProblem(n))
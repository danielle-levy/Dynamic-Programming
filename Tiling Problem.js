let TilingProblemRecursive = function(n) {
    if (n == 0 || n == 1) return 1
    return TilingProblemRecursive(n-1) + TilingProblemRecursive(n-2)
}

console.log(TilingProblemRecursive(5))
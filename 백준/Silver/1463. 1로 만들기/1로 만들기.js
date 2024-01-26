const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const X = parseInt(input[0]);

function makeOne(n) {
    const dp = new Array(n + 1).fill(0);
  
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;
  
        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
        }
  
        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
        }
    }
    return dp[n].toString();
}

console.log(makeOne(X));

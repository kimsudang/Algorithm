const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const t = [];
const p = [];

for (let i = 1; i <= n; i++) {
    const [time, profit] = input[i].split(' ').map(Number);
    t.push(time);
    p.push(profit);
}

const dp = new Array(n + 1).fill(0);

for (let i = n - 1; i >= 0; i--) {
    let next = i + t[i];
    if (next <= n) {
        dp[i] = Math.max(dp[i + 1], p[i] + dp[next]);
    } else {
        dp[i] = dp[i + 1];
    }
}

console.log(dp[0] + '\n');
const readline = require('readline');

function longestIncreasingSubsequence(nums) {
    const lis = [];
    for (const num of nums) {
        let left = 0;
        let right = lis.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (lis[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        if (left === lis.length) {
            lis.push(num);
        } else {
            lis[left] = num;
        }
    }
    return lis.length;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', function(line) {
    lines.push(line);
}).on('close', function() {
    const nums = lines[1].split(' ').map(Number);
    console.log(longestIncreasingSubsequence(nums));
});

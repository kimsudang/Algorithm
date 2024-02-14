const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
let leftTall = [];

rl.on('line', function(line) {
    if (!n) {
        n = parseInt(line);
    } else {
        leftTall = line.split(' ').map(Number);
    }
}).on('close', function() {
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (count === leftTall[i] && result[j] === 0) {
                result[j] = i + 1;
                break;
            } else if (result[j] === 0) {
                count++;
            }
        }
    }

    console.log(result.join(' '));
    process.exit();
});

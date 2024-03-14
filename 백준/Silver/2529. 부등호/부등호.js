const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const k = parseInt(input[0]);
const signs = input[1].split(' ');

let minNum = '9999999999';
let maxNum = '0';

function isPossible(candidate) {
    for (let i = 0; i < k; i++) {
        if (signs[i] === '<' && candidate[i] >= candidate[i + 1]) return false;
        if (signs[i] === '>' && candidate[i] <= candidate[i + 1]) return false;
    }
    return true;
}

function permute(nums, depth, result) {
    if (depth === k + 1) {
        if (isPossible(result)) {
            minNum = BigInt(minNum) > BigInt(result.join('')) ? result.join('') : minNum;
            maxNum = BigInt(maxNum) < BigInt(result.join('')) ? result.join('') : maxNum;
        }
        return;
    }

    for (let i = 0; i <= 9; i++) {
        if (!nums[i]) {
            nums[i] = true;
            permute(nums, depth + 1, [...result, i]);
            nums[i] = false;
        }
    }
}

permute(Array.from({ length: 10 }, () => false), 0, []);

console.log(maxNum.padStart(k + 1, '0'));
console.log(minNum.padStart(k + 1, '0'));

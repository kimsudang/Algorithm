const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const budgets = input[1].split(' ').map(Number);
const M = parseInt(input[2]);

function solution(budgets, M) {
    budgets.sort((a, b) => a - b); // 오름차순 정렬
    let left = 0;
    let right = budgets[budgets.length - 1]; // 최대 상한선은 가장 큰 예산으로 설정

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let total = 0;

        for (let budget of budgets) {
            total += (budget > mid) ? mid : budget;
        }

        if (total > M) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return right; // 최대 상한선을 반환
}

console.log(solution(budgets, M));

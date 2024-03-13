const fs = require('fs');

// 파일에서 입력 읽기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

let maxSum = 0;

// 순열을 이용한 모든 경우 탐색
const permutation = (arr, visited, perm) => {
    if (perm.length === N) {
        let sum = 0;
        for (let i = 1; i < N; i++) {
            sum += Math.abs(perm[i] - perm[i - 1]);
        }
        maxSum = Math.max(maxSum, sum);
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            perm.push(arr[i]);
            permutation(arr, visited, perm);
            perm.pop();
            visited[i] = false;
        }
    }
};

// 순열 탐색 시작
permutation(numbers, Array(N).fill(false), []);

console.log(maxSum);

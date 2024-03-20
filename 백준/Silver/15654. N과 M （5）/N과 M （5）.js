const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

function permutation(nums, selected, visited, M, result) {
    if (selected.length === M) {
        result.push(selected.join(' '));
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            selected.push(nums[i]);
            permutation(nums, selected, visited, M, result);
            selected.pop();
            visited[i] = false;
        }
    }
}

function solution(N, M, nums) {
    nums.sort((a, b) => a - b); // 주어진 숫자들을 오름차순으로 정렬
    const result = [];

    permutation(nums, [], new Array(N).fill(false), M, result);

    return result.join('\n');
}

console.log(solution(N, M, nums));

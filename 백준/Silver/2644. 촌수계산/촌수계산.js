const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input.shift());
const [start, end] = input.shift().split(' ').map(Number);
const m = parseInt(input.shift());

// 부모-자식 관계 그래프 생성
const graph = new Array(n + 1).fill(null).map(() => []);
for (const line of input) {
    const [parent, child] = line.split(' ').map(Number);
    graph[parent].push(child);
    graph[child].push(parent);
}

// 촌수 계산 함수
function calculateChon(start, end) {
    const visited = new Array(n + 1).fill(false);
    const queue = [[start, 0]];

    while (queue.length > 0) {
        const [current, count] = queue.shift();
        visited[current] = true;

        if (current === end) return count;

        for (const neighbor of graph[current]) {
            if (!visited[neighbor]) {
                queue.push([neighbor, count + 1]);
            }
        }
    }

    return -1; // 촌수를 계산할 수 없는 경우
}

// 결과 출력
console.log(calculateChon(start, end));

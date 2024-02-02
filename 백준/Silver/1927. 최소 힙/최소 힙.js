class MinHeap {
    constructor() {
        this.nodes = [];
    }

    // 새로운 원소를 삽입하는 함수
    insert(data) {
        this.nodes.push(data);
        this.bubbleUp();
    }

    // 힙의 성질을 만족하도록 원소를 올려주는 함수
    bubbleUp(index = this.nodes.length - 1) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.nodes[parentIndex] <= this.nodes[index]) break;

            // 부모와 현재 노드의 값을 교환
            [this.nodes[parentIndex], this.nodes[index]] = [this.nodes[index], this.nodes[parentIndex]];
            index = parentIndex;
        }
    }

    // 최솟값을 추출하는 함수
    extract() {
        if (this.isEmpty()) return 0;

        const min = this.nodes[0];
        if (this.nodes.length > 1) {
            // 마지막 원소를 추출하고 힙 성질을 만족하도록 조정
            this.nodes[0] = this.nodes.pop();
            this.trickleDown();
        } else {
            // 힙에 원소가 하나뿐일 경우 그냥 추출
            this.nodes.pop();
        }

        return min;
    }

    // 힙의 성질을 만족하도록 원소를 내려주는 함수
    trickleDown(index = 0) {
        const length = this.nodes.length;
        let minimum = index;

        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        // 왼쪽 자식이 현재 노드보다 작은 경우
        if (leftChildIndex < length && this.nodes[leftChildIndex] < this.nodes[minimum]) {
            minimum = leftChildIndex;
        }

        // 오른쪽 자식이 현재 노드보다 작은 경우
        if (rightChildIndex < length && this.nodes[rightChildIndex] < this.nodes[minimum]) {
            minimum = rightChildIndex;
        }

        // 최솟값이 현재 인덱스와 다를 경우 교환하고 재귀 호출
        if (minimum !== index) {
            [this.nodes[index], this.nodes[minimum]] = [this.nodes[minimum], this.nodes[index]];
            this.trickleDown(minimum);
        }
    }

    // 힙이 비어있는지 확인하는 함수
    isEmpty() {
        return this.nodes.length === 0;
    }
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
    const n = +input[0];
    const operations = input.slice(1).map(Number);

    const heap = new MinHeap();
    let extracts = '';

    // 각 연산에 따라 힙에 삽입하거나 최솟값을 추출
    for (const operation of operations) {
        if (operation !== 0) {
            heap.insert(operation);
        } else {
            // 힙이 비어있으면 '0', 아니면 최솟값을 extracts에 추가
            extracts += heap.isEmpty() ? '0\n' : `${heap.extract()}\n`;
        }
    }

    console.log(extracts.trim()); // 결과 출력
}

main(); // 프로그램 실행

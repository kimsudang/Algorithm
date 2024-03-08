const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
let paper = [];
for (let i = 1; i <= N; i++) {
    paper.push(input[i].split(' ').map(Number));
}

// 흰색과 파란색의 개수를 저장할 변수
let white = 0;
let blue = 0;

// 재귀적으로 색종이를 분할하여 검사하는 함수
const divide = (row, col, size) => {
    // 현재 영역 내의 모든 색상이 같은지 확인
    let color = paper[row][col];
    let isSameColor = true;
    for (let i = row; i < row + size; i++) {
        for (let j = col; j < col + size; j++) {
            if (paper[i][j] !== color) {
                isSameColor = false;
                break;
            }
        }
        if (!isSameColor) break;
    }

    // 모든 색상이 같은 경우에는 해당 영역의 색상을 세고 종료
    if (isSameColor) {
        if (color === 0) white++;
        else blue++;
        return;
    }

    // 다른 색상이 있는 경우에는 영역을 4분할하여 재귀적으로 분할 정복
    const newSize = size / 2;
    divide(row, col, newSize);
    divide(row, col + newSize, newSize);
    divide(row + newSize, col, newSize);
    divide(row + newSize, col + newSize, newSize);
};

// 분할 정복 알고리즘을 통해 색종이 검사
divide(0, 0, N);

// 결과 출력
console.log(white);
console.log(blue);

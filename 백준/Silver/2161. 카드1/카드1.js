const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

// 카드를 담을 배열 초기화
const cards = Array.from({ length: N }, (_, index) => index + 1);

// 결과를 담을 배열
const result = [];

while (cards.length > 0) {
    // 현재 가장 위에 있는 카드를 결과에 추가
    result.push(cards.shift());

    // 카드를 한 장 버림 (가장 위에 있는 카드를 맨 아래로 옮김)
    if (cards.length > 0) {
        cards.push(cards.shift());
    }
}

// 결과 출력
console.log(result.join(' '));

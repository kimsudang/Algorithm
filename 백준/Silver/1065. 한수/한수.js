const fs = require('fs');
// 표준 입력을 읽어와서 처리
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

function isHansu(num) {
    const digits = num.toString().split('').map(Number); // 각 자리수를 배열로 분리

    if (digits.length <= 2) return true; // 두 자리 수까지는 모두 한수이므로 true 반환

    const diff = digits[1] - digits[0]; // 등차의 차이를 계산
    for (let i = 1; i < digits.length - 1; i++) {
        // 각 자리수의 등차를 확인하여 모두 같은 경우에만 한수이다.
        if (digits[i + 1] - digits[i] !== diff) {
            return false; // 등차가 다르면 한수가 아님
        }
    }

    return true; // 모든 자리수가 등차를 가지면 한수임
}

function countHansu(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isHansu(i)) count++; // 주어진 범위 내에서 한수의 개수를 센다
    }
    return count;
}

// 결과 출력
console.log(countHansu(N));

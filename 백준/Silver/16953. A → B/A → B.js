const fs = require("fs");

// 입력값을 읽어옴
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// A와 B를 공백으로 구분하여 읽어온 후 숫자로 변환
const [A, B] = input[0].split(" ").map(Number);

// A에서 B로 가기 위한 최소 연산 횟수를 계산하는 함수
function solve(A, B) {
    let count = 1; // 초기 연산 횟수는 1로 설정

    // B가 A보다 큰 동안 반복
    while (B > A) {
        // B가 짝수이면 B를 2로 나누고, 홀수이면 B의 일의 자리가 1이면 B를 10으로 나눔
        B = B % 2 === 0 ? B / 2 : B % 10 === 1 ? Math.floor(B / 10) : -1;

        count++; // 연산 횟수 증가
    }

    // B가 A와 같아지면 최소 연산 횟수를 반환, 아니면 -1을 반환
    return B === A ? count : -1;
}

// solve 함수를 호출하여 결과를 출력
const result = solve(A, B);
console.log(result);

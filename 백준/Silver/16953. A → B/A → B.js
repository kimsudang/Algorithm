const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B] = input[0].split(" ").map(Number);

function solve(A, B) {
    let count = 1; // A에서 B로 가기 위한 최소 연산 횟수

    while (B > A) {
        if (B % 2 === 0) {
            B /= 2;
        } else {
            if (B % 10 === 1) {
                B = Math.floor(B / 10);
            } else {
                // B가 A로 만들어질 수 없는 경우
                return -1;
            }
        }
        count++;
    }

    return B === A ? count : -1;
}

const result = solve(A, B);
console.log(result);
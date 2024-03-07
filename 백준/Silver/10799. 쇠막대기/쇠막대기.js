const fs = require('fs');
// 파일 시스템을 사용하여 표준 입력에서 입력값을 읽어옴
const input = fs.readFileSync('/dev/stdin').toString().trim();

function countCutSticks(sticks) {
    let result = 0; // 잘린 쇠막대기의 개수를 저장할 변수
    let stack = []; // 여는 괄호를 저장할 스택

    for (let i = 0; i < sticks.length; i++) {
        if (sticks[i] === '(') {
            stack.push('('); // 여는 괄호는 스택에 추가
        } else {
            stack.pop(); // 닫는 괄호가 나오면 스택에서 여는 괄호를 제거
            if (sticks[i - 1] === '(') {
                // 레이저인 경우, 스택에 남아있는 여는 괄호의 개수만큼 쇠막대기가 잘림
                result += stack.length;
            } else {
                // 쇠막대기의 끝인 경우, 하나의 쇠막대기가 잘림
                result++;
            }
        }
    }

    return result;
}

// 결과 출력
console.log(countCutSticks(input));

const fs = require('fs');

function countWays(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 초기값 설정

    // 1부터 n까지 반복하여 각 숫자를 만들 수 있는 방법의 수 계산
    for (let i = 1; i <= n; i++) {
        // 현재 숫자를 만들 수 있는 방법의 수는 이전 1, 2, 3의 합의 방법의 수의 합과 같음
        dp[i] += dp[i - 1];
        if (i >= 2) dp[i] += dp[i - 2];
        if (i >= 3) dp[i] += dp[i - 3];
    }

    return dp[n];
}

// 파일 시스템을 사용하여 입력값을 읽어옴
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0]); // 테스트 케이스의 개수

// 각 테스트 케이스에 대해 결과를 출력
for (let i = 1; i <= T; i++) {
    const n = parseInt(input[i]); // 주어진 정수
    console.log(countWays(n));
}

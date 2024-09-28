function solution(n) {
    let answer = 0;
    if(n % 2 !== 0) {
        for(let i = 1; i <= n; i++) {
            answer += i;
            i++;
        }
    } else {
        for(let i = 2; i <= n; i++) {
            answer += i**2;
            i++;
        }
    }
    return answer;
}
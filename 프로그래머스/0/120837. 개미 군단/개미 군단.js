function solution(hp) {
    let answer = 0;
    if(hp / 5 !== 0) {
        answer += Math.floor(hp / 5);
        hp = hp % 5;
    }
    if(hp / 3 !== 0) {
        answer += Math.floor(hp / 3);
        hp = hp % 3;
    }
    if(hp !== 0) {
        answer += hp;
    }
    return answer;
}
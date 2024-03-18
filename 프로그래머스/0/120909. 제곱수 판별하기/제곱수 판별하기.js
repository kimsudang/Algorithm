function solution(n) {
    const sqNum = Math.sqrt(n);
    return sqNum % 1 === 0 ? 1 : 2;
}
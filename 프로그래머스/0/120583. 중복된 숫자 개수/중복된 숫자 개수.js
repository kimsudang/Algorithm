function solution(array, n) {
    const answer = array.filter((x) => x == n);
    return answer.length;
}
function solution(array, height) {
    const answer = array.filter((tall) => tall > height);
    return answer.length;
}
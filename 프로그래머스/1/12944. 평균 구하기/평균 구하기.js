function solution(arr) {
    let answer = 0;
    const length = arr.length;
    for(let i = 0; i < length; i++) {
        answer += arr[i];
    }
    return answer/length;
}
function solution(my_string, n) {
    var answer = [];
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < n; j++){
            answer.push([...my_string][i])
        }
    }
    return String(answer).replaceAll(',', '');
}
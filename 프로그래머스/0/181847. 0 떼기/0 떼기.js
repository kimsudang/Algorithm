function solution(n_str) {
    let newArr = n_str.split('');
    var answer = [];
    let flag = 0;
    for(let i = 0; i < n_str.length; i++) {
        if(Number(newArr[i]) !== 0) {
            flag = i;
            break;
        }
    }
    for(let j = flag; j < n_str.length; j++) {
        answer.push(newArr[j]);
    }
    return answer.join('');
}
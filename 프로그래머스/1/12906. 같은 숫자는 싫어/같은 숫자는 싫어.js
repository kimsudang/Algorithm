function solution(arr){
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        arr[i] === arr[i+1] ? arr.slice(i, i+1): answer.push(arr[i]);
    }
    
    return answer;
}
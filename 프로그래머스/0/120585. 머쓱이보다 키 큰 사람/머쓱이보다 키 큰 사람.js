function solution(array, height) {
    let answer = 0;
    array = array.sort((a,b) => a - b);
    console.log(array);
    for(let i = 0; i < array.length; i++){
        if(array[i] > height){
            answer++;
        }
    }
    return answer;
}
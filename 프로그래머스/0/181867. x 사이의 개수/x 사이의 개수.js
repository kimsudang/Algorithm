function solution(myString) {
    let answer = [];
    let tempArr = [];
    for(let i = 0; i < myString.length; i++) {
        if(myString.slice('')[i] === "x"){
            answer.push(tempArr.length);
            tempArr = [];
        } else {
            tempArr.push(myString.slice('')[i]);
        }
    }
    answer.push(tempArr.length);
    return answer;
}
function solution(strArr) {
    var answer = [];
    const strToArr = [...strArr];
    for(let i = 0; i < strToArr.length; i++){ 
        if(!strToArr[i].includes("ad")) answer.push(strToArr[i]);
    }
    return answer;
}
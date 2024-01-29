function solution(sides) {
    const regT = sides.sort();
    if(regT[2] < regT[0] + regT[1]){
        return 1;
    }
    else{
        return 2;
    }
}
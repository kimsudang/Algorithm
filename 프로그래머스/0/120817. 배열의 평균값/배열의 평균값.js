function solution(numbers) {
    let avg = 0;
    for(let i of numbers){
        avg += i;
    }
    avg = avg / numbers.length;
    return avg;
}
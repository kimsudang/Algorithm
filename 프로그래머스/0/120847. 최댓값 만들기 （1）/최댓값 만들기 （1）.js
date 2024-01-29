function solution(numbers) {
    numbers.sort((a, b) => b - a);
    console.log(numbers);
    return numbers[0] * numbers[1];
}
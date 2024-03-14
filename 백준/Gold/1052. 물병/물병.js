const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);

function dec2bin(decimal) {
  let count = 0;
  while (decimal > 0) {
    if (decimal % 2 === 1) count++;
    decimal = Math.trunc(decimal / 2);
  }
  return count;
}

function findBottleNumber(bottleNum, canMove) {
  let answer = 0;
  while (true) {
    let count = dec2bin(bottleNum);
    if (count <= canMove) {
      return answer;
    }
    bottleNum++;
    answer++;
  }
}

console.log(findBottleNumber(n, k));
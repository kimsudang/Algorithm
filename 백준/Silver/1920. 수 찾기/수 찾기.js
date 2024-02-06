const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr1 = input[1].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);

arr1.sort((a, b) => a - b);

const result = [];

for (let i = 0; i < arr2.length; i++) {
  let found = false;
  let left = 0;
  let right = arr1.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr1[mid] === arr2[i]) {
      found = true;
      break;
    } else if (arr1[mid] < arr2[i]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  if (found) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join(' '));
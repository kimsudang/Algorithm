const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let stack = [];
let word = "";
let isTag = false;
let ans = "";

for (let str of input) {
  if (str === "<") {
      isTag = true;
      
      // "<" 기호 앞에 문자가 있다면 뒤집어서 이어붙여준다.
      ans += word.split("").reverse().join("") + str;
    
      // 다음 문자를 받아서 처리하기 위해 word를 초기화한다.
      word = "";
  } else if (str === ">") {
      isTag = false;
      
      // 태그가 끝났으므로 word에 넣어둔 문자열들과 함께 ans에 넣어준다.
      ans += word + str;
    
      // 다음 문자를 받아서 처리하기 위해 word를 초기화한다.
      word = "";
  } else if (str === " ") {
      // 공백이 있다면, 태그 내 공백인지, 문자 사이의 공백인지 판단해야한다.
      
      // 만약, 태그 내 공백이라면 그대로 word와 함께 공백 문자를 ans에 추가한다.
      // 문자 사이의 공백이면 구분해줘야하므로, word에 들어있는 문자를 뒤집고, 공백 문자와 함께 ans에 넣어준다.
      ans += (!isTag ? word.split("").reverse().join("") : word) + " ";
      
      // 다음 문자를 받아서 처리하기 위해 word를 초기화한다.
      word = "";
  } else {
      // 위 조건에 해당하지않으면 word 배열에 넣어준다.
      // 이는 태그 내부든지 일반 문자든지 구분하지 않는다.
      word += str;
  }
}

// 만약 ">" 기호로 태그가 닫히는 것으로 끝나는게 아니라,
// 문자로 끝나는 경우에는 word에 넣어진 상태로 for문이 종료된다.
// 양 끝에는 공백이 없기 때문에 분기처리가 안되고 else문만 실행되고 종료되기 때문이다.
// 따라서 출력 전에 word를 뒤집어서 바꿔줄 필요가 있다.
ans += word.split("").reverse().join("");

console.log(ans);
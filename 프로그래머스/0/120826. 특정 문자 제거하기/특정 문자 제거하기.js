 function solution(my_string, letter) {
    const n_str = [];
    for(let i = 0; i < my_string.length; i++){
       if(my_string[i] != letter){
           n_str.push(my_string[i]);
       }
    }
    return n_str.join('');
}
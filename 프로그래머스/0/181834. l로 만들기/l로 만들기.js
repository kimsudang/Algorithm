const solution = (myString) => {
    const myArr = myString.split("");
    const newArr = [];
    for(let i = 0; i < myArr.length; i++) {
        (myArr[i].charCodeAt() > 96 && myArr[i].charCodeAt() < 108) ? newArr.push("l"):newArr.push(myArr[i])
    }
    return newArr.join("");
}
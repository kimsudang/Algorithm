const solution = (my_string) => {
    let new_string = [];
    for(let i = 0; i < my_string.length; i++) {
        const uniChar = my_string[i].charCodeAt();
        uniChar < 95 ? new_string.push(my_string[i].toLowerCase()) : new_string.push(my_string[i].toUpperCase())
    }
    return new_string.join("");
}
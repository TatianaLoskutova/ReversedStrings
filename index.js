function solution(str){
    return str.split('').reverse().join('');
}

function solution1(str){
    let s = '';
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    return s;
}
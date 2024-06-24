function solution(arg1, arg2) {
    let answer = [];
    arg1.split('')
    for(let i=0; i <arg2.length; i++){
      answer.push(arg1[arg2[i]])
    }

    return answer.join('')
}
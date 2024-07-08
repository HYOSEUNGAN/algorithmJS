
function solution(arr){
    let newArr = [];
    
    arr.forEach((el,i)=>{
        if(el !== arr[i+1]) {
            newArr.push(el)
        }
    })
    
    return newArr
}
function solution(cards1, cards2, goal) {
    let answer = [];
    
    let copy1 = cards1
    let copy2 = cards2
    
//     cards1 순회하고 없으면  cards2 순회
    
    for(let i=0; i < goal.length; i++){
        
        if(copy1.length > 0 && copy1[0]==goal[i]){
            copy1.splice(0, 1);
            answer.push(goal[i])
        }else if(copy2.length > 0 && copy2[0]==goal[i]){
                copy2.splice(0, 1);
                answer.push(goal[i])
        }else{
            return 'No'
        }
    }
    
    return arraysEqual(answer, goal) && "Yes";
}

function arraysEqual(arr1, arr2) {
    // 배열의 길이가 다르면 false 반환
    if (arr1.length !== arr2.length) {
        return false;
    }
    // 모든 요소가 동일한지 확인
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    // 배열의 길이가 같고 모든 요소가 동일하면 true 반환
    return true;
}
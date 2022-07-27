function solution(a, b) {
    
    var answer = 0;
    
    for (let i =0; i < a.length; i++){
        
        answer += a[i]*b[i];
        

    }
            return answer
}


// 아래와 차이점?

// function solution(a, b) {
    
//     for (let i =0; i < a.length; i++){
        
//         var multifly = a[i]*b[i];
        

//     }
//             return multifly+= multifly 
// }
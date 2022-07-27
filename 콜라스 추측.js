function solution(num) {
    
    let count = 0;
    
    while (count < 500){
        
        if (num == 1) {
            
            return count
        
        }else{
            num = num % 2 ==0 ? num/2 : num*3 + 1;
        }
        count += 1;
    }
        return -1
}
        

//다른 풀이 방법(test)

// function solution(num) {
//     var answer = 0;
//     var count = 0;
//     for (let i = 0; i < 501; i++) {
//         if (num%2==0){
//              num/2;
//         }else if ((num=1)/2%2==0) {
//             num*3 + 1;
//         }else if(num == 1){
//             return i
//         }
//     return answer= -1;
// }
    
// }
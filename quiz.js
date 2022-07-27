// 항해 99 모의고사 1번 문제 

// function solution(a, b) {
    
// var answer = 0;

// for (let i = 0 ; i < b.length; i++){
 
//     if (b[i] >= 29) {
//         answer += 21 - a[i]

//     }else{
        
//         answer += b[i] - a[i]
//     }
//         return answer
//     }
// }

// console.log (solution(a=[9, 9, 8, 8, 7, 8, 9], b=[21, 25, 30, 29, 22, 23, 30]))

// 항해 99 모의고사 2번 문제 

function solution(month, day){
	let result=""   
    
    var today = new Date();


var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = month  + '-' + day;

console.log(dateString);
	return result;
}
console.log(solution(1,18))



// 결과 : 2021-05-30
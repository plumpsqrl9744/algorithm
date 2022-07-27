// function solution(n){
// 	let result="";
    
//     var num = n.toString().split("").reverse()
//     var sum = num.map((x) => parseInt(x)).reduce((acc, curr) => acc + curr, 0); 

//     for (let i = 0; i <num.length; i++){
//         if(i <= num.length -1){ 
        
//         result += num[i] + "+"
//         }else
//         result = num[num.length-1] + "=" + sum
           
//     }
// 	return result;
// }
// console.log(solution(718253))

// // 3+5+2+8+1+7+


//정답!정답!정답!정답!정답!정답!정답!정답!정답!
function solution(n){
	let result="";
    
    var num = n.toString().split("").reverse()
    var sum = num.map((x) => parseInt(x)).reduce((acc, curr) => acc + curr, 0); 

    for (let i = 0; i <num.length; i++){

        result += i < num.length-1 ? num[i] + "+" : num[num.length-1] + "=" + sum
           
    }
	return result;
}
console.log(solution(718253))
//정답!정답!정답!정답!정답!정답!정답!정답!정답!정답!정답!정답!정답!




//문제 1
// function solution(arr1, arr2, signs) {
//     var answer = [[]];
//     for (var i=0; i<arr1.length; i++){
//         answer[i] =[];

//         for(var j=0; j<arr1[i].length; j++){

         
//          answer[i].push(arr1[i][j] + arr2[i][j]) 
//         }
//     }
//     console.log("a:",answer)
//     return answer;
// }
// console.log(solution(arr1=[[5,7,1],[2,3,5]], arr2=[[5,1,6],[7,5,6]], signs=[[true,true,false],[false,true,false]]))
// console.log(answer)


// function solution(arr1, arr2, signs) {
//     var answer = [[]];
//     for (var i=0; i<arr1.length; i++){
//         answer[i] =[];
//         console.log (answer[2])
//         for(var j=0; j<arr1[i].length; j++){

         
//          answer[i].push(arr1[i][j] + arr2[i][j]) 
//         }
//     }
//     console.log("a:",answer)
//     return answer;
// }
console.log(solution(arr1=[[5,7,1],[2,3,5]], arr2=[[5,1,6],[7,5,6]], signs=[[true,true,false],[false,true,false]]))

function solution(arr1,arr2,signs){
    var answer = Array();
        for(var i = 0; i < arr1.length; i++){
      answer[i] = []; 
      for(var j = 0; j < arr2[i].length; j++){

        if (signs[i][j] == true){
            answer[i][j] = arr1[i][j] + arr2[i][j];             
        }else{
            answer[i][j] = -1*(arr1[i][j] + arr2[i][j]);              
        }
      }
        }
    return answer;
}

console.log(solution(arr1=[[5,7,1],[2,3,5]], arr2=[[5,1,6],[7,5,6]], signs=[[true,true,false],[false,true,false]]))
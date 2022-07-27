function solution(n) {
    
    var answer = n.toString()
    var answer2 = answer.split("");
    
    for (let i = 0; i < answer2.length; i++){
         return Number (answer2.sort(function(a, b) {
            return b - a;
        }).join(''));
    }
}
function solution(s) {
    
    var answer = "";
    var text = s.split(" ")

    
    for (let i = 0; i < text.length; i++){
            var arr = text[i]

        for (let j = 0; j < arr.length; j++){
            
            answer += j % 2 == 0 ? arr[j].toUpperCase() : arr[j].toLowerCase();
            
        }
        if (i < text.length -1){
            answer = answer + " "
        }
        
    }
    return answer;
}
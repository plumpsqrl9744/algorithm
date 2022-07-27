function solution(price, money, count) {
    
    var answer = -1;
    
    var totalPrice = 0;

    for (let i = 1; i <=count; i++){
        
        totalPrice += price * i;
               
        if (money  < totalPrice){
            
            answer =  totalPrice - money;
            
        }else{
            
            answer = 0;
        }
    }
        return answer;
}


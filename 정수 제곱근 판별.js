function solution(n) {
    var route = Math.sqrt(n); // n의 제곱근 출력
    var answer = 0;
    
    answer = route % 1 ==0 ? Math.pow((route+1),2) : -1 ; // n의 제곱근이 정수일 경우 (제곱근+1)의 제곱을 출력, 만약 정수가 아닐경우 -1 출력
    
    
    return answer;
}
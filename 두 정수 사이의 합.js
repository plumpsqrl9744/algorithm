function solution(a, b) {
    var answer = 0;
    var largeNum = Math.max(a,b)
    var smallNum = Math.min(a,b)
    
    for (let i = smallNum; smallNum <= largeNum; smallNum++)
        answer += smallNum
    
    return answer;
}
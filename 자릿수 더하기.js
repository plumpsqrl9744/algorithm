function solution(n) {
  return n
    .toString() // 정수를 문자열로 변환(split 사용하기 위해)
    .split("") // 문자열로 변환한 정수들을 하나씩 배열의 요소로 입력
    .map((x) => parseInt(x)) // 배열내 모든 요소들을 (x)에서 parseInt(x) 로 바꿔준다.
    .reduce((acc, curr) => acc + curr, 0); //배열내 모든 요소들의 합
}
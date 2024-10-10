/*숫자 비교하기*/

/*정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.*/

function solution(num1, num2) {
  let answer = 0;
  if (num1 === num2) {
    answer = 1;
  } else {
    answer = -1;
  }
  return answer;
}

/*
- let 사용 이유: answer 변수를 먼저 0으로 초기화한 후 조건에 따라 1 또는 -1로 재할당하려는 구조인데, const는 재할당이 불가능하기 때문
- 같은 경우: (num1===num2) / 다른 경우: (num1!==num2) 로 작성할 수 있음
- else: '다른 모든 경우'를 의미
- if-else 구문은 삼항 연산자를 사용해 간결하게 대체 가능. -> return 'num1===num2' ? '1' : '-1' ('조건' ? '참일 때 반환할 값' : '거짓일 때 반환할 값')
*/

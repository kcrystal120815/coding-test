/*짝수의 합*/

/*정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.*/

function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

/*
- let을 사용한 이유: sum과 i는 모두 반복문과 관련이 있는 변수로 값이 변경될 수 있기 때문이다.
- let sum = 0: 변수 초기화. 변수가 사용되기 전에 어떤 값을 갖도록 하는 것. 변수의 목적과 의미에 따라 적절한 초기값을 설정할 수 있다.
- for 루프: 괄호 안의 특정 조건을 만족하는 동안 반복하는 구조
- let i = 2: 초기값을 2로 설정. 2부터 시작해서 2씩 커지는 수를 반복해서 더하는 방식. 문제가 홀수였을 경우 1로 설정해야 함.
- +=: 복합 대입 연산자. 변수에 값을 추가하는 데 사용됨. a에 b의 값을 더한 후 그 결과를 다시 a에 저장하는 것으로, a += b;는 a = a + b;와 동일함.
*/

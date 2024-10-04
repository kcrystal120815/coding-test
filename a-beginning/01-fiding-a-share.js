/*몫 구하기*/

/*정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.*/

function solution(num1, num2) {
  const answer = Math.floor(num1 / num2);
  return answer;
}

/*
var: 함수 범위, 호이스팅, 선언 전에 접근 가능 (비추천)
let: 블록 범위, 호이스팅은 되지만 선언 전에 접근 불가, 재할당 가능
const: 블록 범위, 호이스팅은 되지만 선언 전에 접근 불가, 재할당 불가 (상수)
코드를 작성할 때 일반적으로 **const**를 기본으로 사용하고, 필요할 때만 **let**을 사용하는 것이 좋은 관례입니다. var는 잘 사용하지 않는 편이 좋습니다.
*/

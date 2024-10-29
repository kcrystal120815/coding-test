/*배열의 평균값*/

/*정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.*/

function solution(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const answer = sum / numbers.length;
  return answer;
}

/*
reduce((콜백 함수)=>{계산식}, 초기값): 배열의 각 요소에 대해 주어진 함수를 실행하고 단일 값으로 축소(reduce) 하는 함수. (주로 합계, 평균, 최대값, 최소값 등을 계산)

콜백 함수
- acc(accumulator): 누적된 결과를 저장하는 값, 이전 호출의 결과
- curr(currentValue): 현재 처리 중인 배열 요소
- currentIndex: 현재 요소의 인덱스
- array: reduce()를 호출한 배열

.length: 배열의 요소 개수나 문자열의 문자 수를 확인
*/

/*배열 2배 만들기*/

/*정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.*/

function solution(numbers) {
  return numbers.map(number => number * 2);
}

/*
1. map 메서드
- 배열의 각 요소에 대해 하나씩 차례대로 콜백 함수를 자동으로 호출 및 실행하고, 실행될 때마다 새로운 요소값을 currentValue에 할당하여, 새로운 배열을 반환하는 배열 메서드
- Array인 객체에만 map을 직접 사용 가능 (객체/문자열 X)
- 구조: array.map(callback, thisArg);
   callback(콜백 함수): 배열의 각 요소에 대해 실행할 함수. 아래 3개의 매개변수가 callback함수로 전달될 수 있음(선택사항)
   - currentValue(현재값): 현재 처리 중인 요소
   - index: 배열 내에서 현재 요소의 순서
   - array: map 메서드를 호출한 배열의 이름
   thisArg(this값): callback 함수 내에서 this로 사용할 값(선택사항)

2. 화살표함수

*/

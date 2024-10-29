/*중복된 숫자 개수*/

/*정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.*/

function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}

/*
for(초기화; 조건; 증감;){반복할 코드}: 특정 코드를 반복해서 실행하기 위한 기본 구조
- 초기화: 반복문이 시작할 때 한 번 실행되는 부분. 주로 반복 횟수를 추적하는 루프 카운터 변수를 선언하고 초기값을 설정. (Ex. let i = 0 -> 루프카운터 i의 초기값을 0으로)
- 조건: 반복이 계속될 조건을 설정하는 부분. 이 조건이 참(true)인 동안 루프 반복 / 거짓(false)이 되면 루프 종료. (Ex. i < 5 -> 반복 횟수가 5번 미만일 동안 실행)
- 증감: 루프가 한 번 실행될 때마다 수행되는 부분. 반복이 끝날 때마다 실행되어 반복 횟수를 증가 또는 감소시킴. (Ex. i++ -> i를 1씩 증가시킴)

array[i]: 배열 array에서 i번째 위치의 요소
answer++: answer의 값을 1 증가시킴

=> answer의 초기값 0에서, array의 i번째 요소가 n과 같다면 answer를 1 증가시키고, 이것을 array의 개수가 끝날 때까지 반복하여, 최종적으로 array에서 n과 같은 값을 모두 센 answer를 도출한다.

데이터의 크기가 크지 않고 단순한 조건을 체크하는 경우 filter 메서드를 사용하는 방법도 있음
function solution(array, n) {
    const answer = array.filter(num => num === n).length; // filter를 사용하여 n과 같은 요소만 필터링하고, 그 길이를 반환
    return answer; // n의 개수를 반환
}
*/

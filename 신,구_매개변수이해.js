//기존의 작성된 서류를 이해하기 위하여 구버전의 매개변수 활용을 이해해야 한다.
//매개변수에 아무 값도 입력되지 않았을 때 갖는 기본값을 설정하는 코드 부분이 필요하다.
//아래와 같이 조건문으로 기본값을 설정해 주는 구버전의 코드 형식이 있다
const isLeapYear = function (연도) {
  if (typeof 연도 === "undefined") {
    연도 = new Date().getFullYear();
  }
  console.log(`연도:${연도}`);
  return (연도 % 4 === 0 && 연도 % 100 !== 0) || 연도 % 400 === 0;
};
console.log(isLeapYear());
//현재 자바스크립트는 함수 매개변수에 바로 함수로 기본값을 넣어준다
const isLeapYear = function (연도 = new Date().getFullYear()) {
  console.log(`연도:${연도}`);
  return (연도 % 4 === 0 && 연도 % 100 !== 0) || 연도 % 400 === 0;
};
console.log(isLeapYear());

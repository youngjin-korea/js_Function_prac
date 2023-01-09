//함수의 사용 이유는 추상화라는 개념으로 모이게 되지만, 코드의 재사용에 큰 장점이 있다.

//1에서 limit까지의 합을 구하는 식이 필요할때 마다 사용할 수도 있지만 함수로 한번 만들어 두면 limit 값만 바꾸면 함수를 호출하여 구할수 있다.

const sum = function () {
  //sum함수 호출시 여기로 점프
  let output = 0;
  for (let i = 1; i <= limit; i++) {
    output += i;
  }
};

let limit = 10;
sum(); //1 to 10 sum!!

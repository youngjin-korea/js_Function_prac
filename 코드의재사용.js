//함수의 사용 이유는 추상화라는 개념으로 모이게 되지만, 코드의 재사용에 큰 장점이 있다.

//1에서 limit까지의 합을 구하는 식이 필요할때 마다 사용할 수도 있지만 함수로 한번 만들어 두면 limit 값만 바꾸면 함수를 호출하여 구할수 있다.

const sum = function () {
  //sum함수 호출시 여기로 점프
  let output = 0;
  for (let i = 1; i <= limit; i++) {
    output += i;
  }
  console.log(output);
};

let limit = 10;
sum(); //1 to 10 sum!!
//============================================================
//위의 식에 매개변수와 리턴값을 더하면 호출시 더 간편해진다.
// const sum = function (limit) {
//   //sum함수 호출시 여기로 점프
//   let output = 0;
//   for (let i = 1; i <= limit; i++) {
//     output += i;
//   }
//  return output;
// };
// console.log(`합은: ${sum(10)}`)
//매개변수에 바로 대입이 가능하고 리턴값으로 바로 값만 받아서 원하는 형태로 출력을 할수있다.

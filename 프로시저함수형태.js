//프로시저(매개변수가 비어있는) 형태의 함수
const f = function () {
  //점프
  console.log(`안녕하세요 + ${x}`);
  console.log(`안녕하세요 + ${x}`);
  console.log(`안녕하세요 + ${x}`);
  //리턴
};

const x = 10;
f(); //호출

/*x값에 10을 넣고 함수를 호출(실행)하면 f함수의 본문으로 점프를 하여 내부 내용을 실행하게 된다.*/

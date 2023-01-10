const min = function (배열) {
  let output = 배열[0]; // output이라는 변수로 배열의 0번째 인덱스에 요소로 배정해줌
  for (const value of 배열) {
    // value of 배열로 배열의 모든 요소를 하나씩 본다
    if (output > value) {
      //첫 배열값이 반복중에 만나는 요소값보다 크다면 그 요소값을 output에 담는다.
      output = value;
    }
  }
  return output; //결국 모든 배열의 값들과 비교하여 제일 작은 값을 반환한다.
};
console.log(min([52, 280, 300, 476, 56, 3]));
/*
function max (배열){
  let output = 배열[0]
  for (const value of 배열){
    if(output<value){
      output = value
    }
  }
  return output
}
console.log(min([52,280,300,476,56,3]))
*/

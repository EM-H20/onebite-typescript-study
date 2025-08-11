// 함수 오버로딩
/*
    하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 분법
    하나의 함수 Func
    모든 매개변수의 타입 number
    Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
    Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
*/

function Func(a: number): void;
function Func(a: number, b: number, c: number): void;

function Func(a: number, b?: number, c?: number): void{
   if(typeof b === 'number' && typeof c === 'number') {
       // Ver2: 매개변수가 3개
       console.log(a + b + c);
   }else {
         // Ver1: 매개변수가 1개
         console.log(a * 20);
   }
}

Func(10);          // 200
Func(10, 20, 30); // 60
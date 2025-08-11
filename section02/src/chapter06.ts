// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 어떤 타입이든지 변수에 넣을 수 있음.

let anyVar : any= 123;
anyVar = "hello";
anyVar = true;
anyVar = null;
anyVar = undefined;
anyVar = {};
anyVar = [];
anyVar = function() {};
anyVar.toFixed();
anyVar.toUpperCase();

// let num : number = 10;
// num = anyVar; //runtime error

// unknown
let unknownVar : unknown;
unknownVar = 123;
unknownVar = "hello";
unknownVar = true;
unknownVar = null;
unknownVar = undefined;
unknownVar = () => {};
unknownVar = [];

// 함수 안 됨. 사칙연산 안 됨.
// unknownVar.toFixed();
// unknownVar.toUpperCase();

// let num : number = 10;
// num = unknownVar; // 할당 안 됨.

if(typeof unknownVar === "number") { // 타입 정제 : 이건 됨
    unknownVar.toFixed();
}

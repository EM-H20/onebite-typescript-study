// 함수 타입 

type Operation = (a : number, b: number) => number;
// 함수 타입을 변수에 할당
const add: Operation = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;

const mul: Operation = (a, b) => a * b;

const div: Operation = (a, b) => a / b;

// 호출 시그니쳐 (콜 시그니쳐)
type Operation2 = {
    (a: number, b: number): number;
}

const add2: Operation2 = (a, b) => a + b;

const sub2: Operation2 = (a, b) => a - b;

const mul2: Operation2 = (a, b) => a * b;

const div2: Operation2 = (a, b) => a / b;

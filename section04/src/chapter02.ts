// 함수 타입 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가?

// 1. 반환 값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a : A = () => 10; // Number
let b : B = () => 10; // Literal 10

a = b;
// b = a; // 에러 발생: B는 A보다 더 좁은 타입이므로 A를 B로 할당할 수 없음

// 기준 2. 매개변수가 호환되는가
// 2-1 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; //에러 서브타입인 
d = c;

// 2-2 매개변수의 개수가 다를 때
type E = (value: number, value2: number) => void;
type F = (value: number) => void;

let e: E = (value, value2) => {};
let f: F = (value) => {};

e = f; 
// f = e; // E 형식은 F 형식에 할당할 수 없다. 대상이 너무 적은 인수를 제공
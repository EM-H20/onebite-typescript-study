// infer
// inference - 추론
// 특정타입만 추론

type FuncA = () => string;
type FuncB = () => number;

type ReturnType <T> = T extends () => infer R ? R : never;

type A = ReturnType <FuncA>;
type B = ReturnType <FuncB>;
type C = ReturnType <number>;

// 예제
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
type PromiseUnpack<T> = T extends Promise <infer R> ? R : never;

// number
type PromiseA = PromiseUnpack<Promise<number>>;

// string
type PromiseB = PromiseUnpack<Promise<string>>;

// never
type PromiseC = PromiseUnpack<number>;

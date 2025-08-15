// 조건부 타입 기반
// Exclude<T, U> - T에서 U를 제외
// -> 제외하다, 추방하다
// T에세 U를 제거하는 타입

// 구현 예시
type Exclude<T, U> = T extends U ? never : T;
// Exclude<string, boolean> |
// Exclude<boolean, boolean>
// string | never => string
type A = Exclude<string | boolean, boolean>;

// Extract<T, U> - T에서 U를 추출
// -> 추출하다, 추출
// T에서 U를 추출하는 타입

//구현예시
type Extract<T, U> = T extends U ? T : never;
// Extract<string, boolean> |
// Extract<boolean, boolean>
// never | boolean => boolean

type B = Extract<string | boolean, boolean>;

// ReturnType<T> - 함수의 반환 타입
// -> 반환하다, 반환
// 함수의 반환 타입을 추출하는 타입
function funcA() {
    return "hello";
}
function funcB() {
     return 10;
}
function funcC() {
    return true;
}

function funcD() {
    return () => {};
}

// 구현 예시
type ReturnType <T extends (...arg : any) => any> = T extends (
    ...arg : any
) => infer R 
    ? R 
    : never;

type ReturnTypeA = ReturnType<typeof funcA>;
type ReturnTypeB = ReturnType<typeof funcB>;
type ReturnTypeC = ReturnType<typeof funcC>;
type ReturnTypeD = ReturnType<typeof funcD>;
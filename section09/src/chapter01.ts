// 분산적인 조건부 타입

// 분산 방지 - extends 앞 뒤에 [] 추가 - 이점 : 분산적인 타입을 방지할 수 있음
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a : StringNumberSwitch<number> = "123";

let b : StringNumberSwitch<string> = 123;

let c : StringNumberSwitch<number | string> = 123;

// StringNumberSwitch<number | string> = StringNumberSwitch<number> | StringNumberSwitch<string>
 let d : StringNumberSwitch<boolean | number | string>;
 
 // StringNumberSwitch<boolean | number | string> = StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>

 // number -> string -> number 로 묶여서 number | string으로 됨

 // 실용적 예제

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;

// 1 딘계
// Exclude <number, string> = number |
// Exclude <string, string> = never  |
// Exclude <boolean, string> = boolean |

// 2 단계
// number | never | boolean -> number | boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

// 1 단계
// Extract <number, string> = never
// Extract <string, string> = string
// Extract <boolean, string> = never

// 2 단계
// never | string | never -> string








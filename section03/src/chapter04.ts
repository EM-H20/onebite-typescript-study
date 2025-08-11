// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재


// 합집합 타입 - Union Types
let a : string | number | boolean; // 합집합 타입
a = 1;
a = 'hello';
a = true;

let arr: (string | number | boolean)[] = [1, 'hello', true]; // 배열의 각 요소가 합집합 타입을 가짐

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person; // Union 타입
let union1: Union1 = {
    name: "",
    color: "",
}; // Dog 타입으로 초기화 가능

let union2: Union1 = {
    name: "",
    language: "",
}; // Person 타입으로 초기화 가능

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}; // Dog 타입과 Person 타입의 속성을 모두 가질 수 있음


// 
// let union4 : Union1 = {
//     name: "", // 오류: color 또는 language 속성이 없음
// };

// 교집합 타입 - Intersection Types
let variant : number & string; // 교집합 타입
// variant = 1; // 오류: number와 string을 동시에 만족하는 값은 없음

type Intersection1 = Dog & Person; // Intersection 타입

let intersection1: Intersection1 = {
    name: "",
    color: "",
    language: "",
}
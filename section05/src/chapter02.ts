// 선언 합침

interface Person {
    name : string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "홍길동",
    age: 30
};

// 모듈 보강

interface Lib{
    a : number;
    b : number
}

interface Lib {
    c: string; // 기존 인터페이스에 새로운 속성 추가
}

const Lib: Lib = {
    a: 10,
    b: 20,
    c : "hello  world" // 추가된 속성
};
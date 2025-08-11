// 객체 object
let user : {
    // 객체 리터럴 타입
    id? : number; // 선택적 프로퍼티 (optional property)
    name : string;
} = {
    id : 1,
    name : "홍루카",
}

// 구조적 타입 시스템 : Property Based Type System
// 이름만을 기준으로 type을 정의하는건 명목적 타입 시스템  <-> 구조적 타입 시스템
let dog : {
    name : string;
    color : string;
} = {
    name : "돌돌이",
    color : "brown",
}

console.log(user.id);
console.log(dog.name);

let config : {
    readonly apiKey : string; // 못 바꿈
} = {
    apiKey : "apikey"
}
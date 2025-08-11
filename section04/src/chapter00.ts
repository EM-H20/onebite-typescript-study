// 함수수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고. 어떤 결과 값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고 어떤 [타입]의 결과 값을 반환하는지

function func(a: number, b: number) {  // ) : number 알아서 추론 됨
    return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 필수 매개변수와 선택적 매개변수
// 선택적 매개변수는 필수 매개변수 뒤에 정의해야 함
function introduce(name : string, age?: number) {
    console.log(`안녕하세요. 제 이름은 ${name}이고, 나이는 ${age}세 입니다.`);
}

introduce('홍길동'); // age는 선택적 매개변수이므로 생략 가능

// Rest 매개변수
// 매개변수의 개수가 정해지지 않았을 때 사용
function sum(...numbers: number[]) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
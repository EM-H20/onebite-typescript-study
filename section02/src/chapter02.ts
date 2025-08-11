// 배열
let numArr : number[] = [1,2,3];

let strArr : string[] = ["hello","world"];

// 제네릭 분법 Array<T>
let boolArr : Array<boolean> = [true,false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr : (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr : number[][] = [
    [1,2,3],
    [4,5,6],
];

// 튜플
let tup1 : [number, number] = [1,2];
let tup2 : [number, string, boolean] = [1, "hello", true];

const users : [string, number][] = [
    ["김루카", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["이아무개", 4],
    ["홍아무개", 5],
];

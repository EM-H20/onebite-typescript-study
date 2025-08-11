// 제네릭 - 일반적인, 포괄적인

// 제네릭 함수 - <T> 제네릭을 나타냄
function func<T>(value : T) {
    return value;
}

let num = func(10);
if(typeof num === "number"){
    num.toFixed();
}

let bool = func(true);

let str = func("String");

let arr = func<[number, number, number]>([1,2,3]);
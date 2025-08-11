// 첫 번째 사례

function swap <T, U>(a : T, b : U){
    return [b, a];
}

const [a, b] = swap("1", 2);

// 두 번째 사례

function returnFirstValue<T>(data: [T, ...unknown[]]){
    return data[0];
}

let num = returnFirstValue([1,2,3]);
// 1
let str1 = returnFirstValue([1, "b", "c"]);
// "a"

// 세 번재 사례


interface InterfaceA{
    length : number;
}

interface InterfaceB extends InterfaceA{}

// 제네릭 제약
function getLength<T extends {length : number}>(data : T){
    return data.length;
}

let var1 = getLength([1,2,3]); // 3 
let var2 = getLength("12345"); // 5
let var3 = getLength({length : 10});  // 10
let var4 = getLength(12345); // Error

console.log(var1, var2, var3, var4);
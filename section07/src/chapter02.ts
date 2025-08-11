// map 메서드

const arr = [1, 2, 3];

const netArr = arr.map((item) => {
    return item * 2;
}); // [2, 4, 6]

// T는 배열의 타입, U는 callback 함수의 반환값의 타입
function map<T, U>(arr : T[], callback : (item : T) => U){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (item) => {
    return item * 2;
});

map(["a", "b", "c"], (item) => {
    return parseInt(item);
});

// for each
const arr2 = [1, 2, 3];
arr2.forEach((item) => {
    console.log(item);
}); // 1 2 3

function forEach<T>(arr : T[], callback : (item : T) => void){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (item) => {
    console.log(item.toFixed());
});

forEach(["a", "b", "c"], (item) => {
    console.log(item.toUpperCase());
});


// 범용적 타입
// 타입 추론
let a = 10; // number
let b = 'hello'; // string

let c = {
    id : 1,
    name : 'John',
    profile : {
        age: 30,
        city: 'New York'
    },
    url : [ 'https://example.com' ]
}

let {id, name, profile, url} = c; // id: number, name: string, profile: { age: number, city: string }, url: string[]

let [one, two, three] = [1, "two", true]; // one: number, two: string, three: boolean

function add(message: any) {
    return message;
}   

let d;
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

// 상수 추론
const num = 1;
const str = 'hello';

let arr = [1, "string", 1, 2, 3, "123", true, false, function(){}]; // number | string | boolean
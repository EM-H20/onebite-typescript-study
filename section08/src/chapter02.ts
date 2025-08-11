// keyof 연산자

// interface Person {
//     name : string;
//     age : number;
// }

type Person = typeof person;

function getPropertyKey(person : Person, key : keyof Person) {
    return person[key];
}

const person = {
    name : "홍길동",
    age : 20
};

console.log(getPropertyKey(person, "name"));

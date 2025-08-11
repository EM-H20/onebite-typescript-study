// 인터페이스

interface Person {
    readonly name: string;
    age?: number;
    sayHi() : void;
    sayHi(a: number, b : number) : void;
}

const person: Person = {
    name: "Alice",
    // age: 30 // age는 선택적 속성이므로 생략 가능
    sayHi: function() {
        console.log(`HI`);
    },
};

// person.name = "Bob"; // 오류: name은 읽기 전용 속성입니다.
person.sayHi(); // "Hi, my name is Alice"
person.sayHi(1, 2); 
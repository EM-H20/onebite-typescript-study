// 타입 단언

type Person = {
    id: number;
    name: string;
    age: number;
}

let person = {} as Person; // person: Person - type assertion
person.id = 1;
person.name = 'Alice';
person.age = 25; // person: Person - now fully defined
console.log(person);

type Dog = {
    name : string;
    color : string;
}

let dog : Dog = {
    name : 'Buddy',
    color : 'brown',
    breed: 'Labrador' // 
} as Dog; // dog: Dog - type assertion

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never; // A가 B의 슈퍼타입
let num2  = 10 as unknown; // A가 B의 서브타입

// let num3 = 10 as string; // A가 B의 서브타입이지만, 타입이 맞지 않음
let num3 = 10 as unknown as string; // 이건 됨. 다중 단언 - 좋은 방법은 아님
let num4 = 10 as const;

let cat = {
    name : '고양이',
    color : 'black'
}  as const;

// Non Null 단언
let str: string | null = null;

type Post = {
    title : string;
    author? : string;
};

let post: Post = {
    title: '타입스크립트 배우기',
    author: '홍길동'
};

const len: number = post.author!.length; // Non-null assertion operator - post.author가 null이 아님을 확신
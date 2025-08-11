// 기본 타입 간의 호환성

let  num1: number = 10;
let  num2: 10 = 10; // 10 리터럴 타입

num1 = num2; // OK 업캐스팅

type Animail = {
    name: string;
    color : string;
};

type Dog = {
    name: string;
    color : string;
    breed: string;
};

let animail: Animail = {
    name: "바둑이",
    color: "갈색"
};
let dog: Dog = {
    name: "바둑이",
    color: "갈색",
    breed: "진돗개"
};

animail = dog; // OK 업캐스팅
// dog = animail; // Error 다운캐스팅

type Book = {
    name : string,
    price : number
}

type ProgrammingBook = {
    name : string,
    price : number,
    skill : string
}

let book: Book = {
    name: "타입스크립트",
    price: 30000
};
let programmingBook: ProgrammingBook = {
    name: "타입스크립트",
    price: 30000,
    skill: "프로그래밍"
};
book = programmingBook; // OK 업캐스팅
// programmingBook = book; // Error 다운캐스팅

// 초과 프로퍼티 검사
let book2: Book = {
    name: "타입스크립트",
    price: 30000,
    // skill: "프로그래밍" // 추가 프로퍼티는 허용되지 않음
};

let book3: Book = programmingBook; // OK 업캐스팅

function func(book: Book) {
  func({
    name: "자바스크립트",
    price: 25000,
    // skill: "프로그래밍" // 추가 프로퍼티는 허용되지 않음
  })
}

func(programmingBook); // OK 업캐스팅
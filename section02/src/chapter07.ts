// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void { // 리턴이 없음.
    console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입
function func3(): never { // 무한 루프
    while(true){}
}

function func4(): never { // 에러
    throw new Error("error");
}

let a : never; // 할당 불가능
// a = 1; 
// a = "hello";
// a = true;
// a = null;
// a = undefined;
// a = {};
// a = [];
// a = function() {};

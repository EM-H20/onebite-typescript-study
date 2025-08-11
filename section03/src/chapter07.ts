// 타입 좁히기

type Person = {
    name : string;
    age : number;
};

// value의 타입이 number : toFixed()를 호출할 수 있다.
// value의 타입이 string : toUpperCase()를 호출할 수 있다.
// value의 타입이 Date : getTime()을 호출할 수 있다.
// value의 타입이 Person : name과 age를 출력할 수 있다.
// value의 타입이 null 또는 undefined : 아무것도 하지 않는다.
function func (value : number | string | Date | null | Person){
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) { // 왼쪽에 있는 값이 Date의 인스턴스인지 확인
        console.log(value.getTime());
    } else if (typeof value === "object" && value !== null) { // null 체크를 포함해야 함
        console.log(`Name: ${value.name}, Age: ${value.age}`);
    }
    else{
        console.log("value is null or undefined");
    }
}
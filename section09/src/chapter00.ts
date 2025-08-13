// 조건부 타입
type A = number extends string ? string : number;

// 객체
type ObjA = {
    a: number;
};
type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? string : number;

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number> = "123";
let b: StringNumberSwitch<string> = 123;

function removeSpaces<T>(text : T) : T extends string ? string : undefined;

function removeSpaces (text : any){
    if(typeof text === "string")  {
        return text.replace(" ", "");
    }
    return undefined;
}

let result = removeSpaces("hello new world");
console.log(result.toUpperCase());

let result2 = removeSpaces(undefined);


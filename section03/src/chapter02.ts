// Unknown 타입

function UnknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknown : unknown;
    // 다운캐스팅
    // let num : number = unknown; 
}

// never 타입
function neverExam(){
    let a : never;
    // a = 1; // Error
    // a = "hello"; // Error
    // a = true; // Error
    // a = null; // Error
    // a = undefined; // Error
}

// any 타입 : 치트키임 never 빼고 다 됨
function anyExam(){
    let a : any = 1;
    let b : any = "hello";
    let c : any = true;
    let d : any = null;
    let e : any = undefined;

    let anyVar : any;
    // 다운캐스팅
    let num : number = anyVar; // OK

    // let neverVar : never = anyVar; //이거 안 됨
}
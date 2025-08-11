// 제네릭 인터페이스

interface keyPair<K, V>{
    key : K;
    value : V;
}

let keyPair1 : keyPair<string, number> = {
    key : "a",
    value : 1
};

console.log(keyPair1);

let keyPair2 : keyPair<boolean, string[]> = {
    key : true,
    value : ["a", "b", "c"]
};

console.log(keyPair2);
    

// 인덱스 시그니처
interface NumberMap{
    [key:string]:number;
}

let map1 : NumberMap = {
    a : 1,
    b : 2,
    c : 3
};

interface Map<V>{
    [key:string]: V;
}

let stringMap : Map<string> = {
    a : "a",
    b : "b",
    c : "c"
};

let booleanMap : Map<boolean> = {
    a : true,
    b : false,
    c : true
};

// 제네릭 타입 별칭
type Map2<V> = {
    [key:string]: V;
};

let stringMap2 : Map2<string> = {
    a : "a",
    b : "b",
    c : "c"
};

// 제네릭 인터페이스의 활용 예시
// 유저관리 프로그래
// 유저구분 : 학생유저 / 개발자 유저

interface Student{
    type : "student";
    school : string;
}

interface Developer{
    type : "developer";
    skill : string;
}

interface User <T>{
    name : string;
    profile : T;
}

function goToSchool(user : User<Student>){
    console.log(user.name + "가 " + user.profile.school + "로 가는 중...");
}

const developerUser : User<Developer> = {
    name : "홍루카",
    profile : {
        type : "developer",
        skill : "typescript"
    }
};

const studentUser : User<Student> = {
    name : "김학생",
    profile : {
        type : "student",
        school : "대학교"
    }
};
    
goToSchool(studentUser);
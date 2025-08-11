// 클래스

class Student{
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age){
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드, 메소드
    study(){
        console.log(`${this.name} 학생은 공부를 합니다.`);
    }
    introduce(){
        console.log(`안녕하세요, 저는 ${this.name}입니다. 학년은 ${this.grade}이고, 나이는 ${this.age}세입니다.`);
    }
}

class StudentDeveloper extends Student {

    language; // 프로그래밍 언어
    
    // 생성자 오버라이드
    constructor(name, grade, age, language){
        super(name, grade, age); // 부모 클래스의 생성자 호출
        this.language = language;
    }
    programming(){
        console.log(`${this.name} 학생은 ${this.language}로 프로그래밍을 합니다.`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentA = new Student('홍길동', 'A+', 20);
studentA.study();
studentA.introduce();


let studentB = new Student('이순신', 'B', 22);
studentB.study();
studentB.introduce();

let studentC = new StudentDeveloper('강감찬', 'A', 25, 'JavaScript');
console.log(studentC instanceof Student); // true
studentC.study();
studentC.introduce();
studentC.programming();
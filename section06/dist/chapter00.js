// 클래스
let studentA = {
    name: '홍길동',
    grade: "A+",
    age: 20,
    study() {
        console.log(`${this.name} 학생은 공부를 합니다.`);
    },
    introduce() {
        console.log(`안녕하세요, 저는 ${this.name}입니다. 학년은 ${this.grade}이고, 나이는 ${this.age}세입니다.`);
    }
};
export {};

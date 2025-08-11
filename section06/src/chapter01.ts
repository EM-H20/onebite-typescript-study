// 타입스크립트의 클래스

class Employee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

class Executive extends Employee {
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    lead() {
        console.log(`${this.name} is leading the team from office number ${this.officeNumber}.`);
    }

}

const employee1 = new Employee("Alice", 30, "Software Engineer");
employee1.work(); // Alice is working as a Software Engineer.

const executive1 = new Executive("Bob", 45, "CTO", 101);
executive1.work(); // Bob is working as a CTO.
executive1.lead(); // Bob is leading the team from office number 101.
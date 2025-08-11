// 사용자 정의 타입 가드

type Dog = {
    name : string;
    isBark : boolean;
}

type Cat = {
    name : string;
    isScratch : boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal) : animal is Dog {
    return (animal as Dog).isBark !== undefined;   
}

function isCat(animal: Animal) : animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}
function warning(animal: Animal) {
    if (isDog(animal)) {
        console.log(`${animal.name} is barking!`);
    } else if (isCat(animal)) {
        console.log(`${animal.name} is scratching!`);
    }
    else{
        console.log("Unknown animal type");
    }
}

// 사용 예시
const dog: Dog = { name: "Buddy", isBark: true };
const cat: Cat = { name: "Whiskers", isScratch: true };

warning(dog); // Buddy is barking!
warning(cat); // Whiskers is scratching!
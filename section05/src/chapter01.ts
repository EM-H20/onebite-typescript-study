// 인터페이스의 확장

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    name : string;
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

const dog : Dog = {
    name : "",
    color: '갈색',
    isBark: true
};

interface DogCat extends Dog, Cat {
    isBark: boolean;
    isScratch: boolean;
}
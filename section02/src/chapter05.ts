// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN,
    USER,
    GUEST
}

enum Language {
    KOREAN = "ko",
    ENGLISH = "en",
    JAPANESE = "ja",
    CHINESE = "zh"
}

const user1 = {
    name : "홍루카",
    role : Role.ADMIN,
    language : Language.KOREAN
}

const user2 = {
    name : "이루카",
    role : Role.USER,
    language : Language.ENGLISH
}

const user3 = {
    name : "김루카",
    role : Role.GUEST,
    language : Language.CHINESE
}

console.log(user1);
console.log(user2);
console.log(user3);
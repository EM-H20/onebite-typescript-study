// 맵드 타입 - 무조건 type 에서만 사용 가능

interface User{
    id : number;
    name : string;
    age : number;
};

type PartialUser = {
    [key in keyof User]? : User[key];
};

type BooleanUser = {
    [key in keyof User] : boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User] : User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser() : User {
    // ... 기능
    return {
        id : 1,
        name : "홍길동",
        age : 20
    }
}

// 하명의 유저 정보를 수정하는 기능
function updateUser(user : PartialUser) {
    // ... 수정하는 기능   
}

type User = { //타입 별칭 (Type Alias)
    id : number;
    name : string;
    nickname : string;
    birth : string;
    bio : string;
    location : string;
}

function func () {
    // 함수 내에서 타입 별칭 정의
    type User = {}
}

let user : User = {
    id : 1,
    name : "홍루카",
    nickname : "루카",
    birth : "2000-01-01",
    bio : "안녕하세요",
    location : "서울"
}

// 인덱스 시그니처
type CountryCodes = {
    [key : string] : string;
}

let countryCodes : CountryCodes = {
    Korea : "ko",
    America : "us",
    China : "cn",
    Japan : "jp"
}

type CountryNumberCodes = {
    [key : string] : number;
    Korea : number
}

let countryNumberCodes : CountryNumberCodes = {
    Korea : 410,
}
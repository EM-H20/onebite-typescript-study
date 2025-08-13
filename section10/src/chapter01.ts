// 맵드 타입
// Partial<T> - 모든 프로퍼티가 선택적
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입

interface Post {
    title: string;
    tag : string[];
    content : string;
    thumbnail? : string;
}
// 구현 예시
type Partial<T> = {
    [key in keyof T]?: T[key];
};

const draft : Partial<Post> = {
    title : "제목 나중에",
    content : "내용 나중에",
}

// Required<T> - 모든 프로퍼티가 필수적
// -> 필수적인, 반드시 필요한
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

// 구현 예시
type Required<T> = {
    [key in keyof T]-?: T[key]; // ? 를 빼겠다. 라는 느낌
};

const withThumbnail : Required<Post> = {
    title : "제목",
    tag : ["tag1", "tag2"],
    content : "내용",
    thumbnail : "썸네일",
}

// Readonly<T> - 모든 프로퍼티가 읽기 전용
// -> 읽기 전용, 변경할 수 없는
// -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입

// 구현 예시
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};

const readonlyPost : Readonly<Post> = {
    title : "제목",
    tag : ["tag1", "tag2"],
    content : "내용",
    // thumbnail : "썸네일",
}

// readonlyPost.title = "alall"; // 읽기 전용 속성이므로 할당할 수 없다.